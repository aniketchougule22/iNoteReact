const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('../models/user');
const auth = require('../middlewares/auth').isValidToken;

const jwt_key = 'aniketchougule';

/* create user */
router.post('/create_user', async (req, res) => {
    try {
        const get = await user.findOne({ email: req.body.email });

        if (!get) {
            let salt = bcrypt.genSaltSync(10);
            req.body.password = bcrypt.hashSync(req.body.password, salt);
            const create = await user(req.body).save();

            if (create._id) {
                let token = jwt.sign({_id : create._id}, jwt_key);
                res.status(200).json({ status: true, statusCode: 200, message: 'User inserted successfully..!', data: create, token: token });
            } else {
                res.status(400).json({ status: false, statusCode: 400, message: 'something went wrong..!', data: create });
            }
        } else {
            res.status(400).json({ status: false, statusCode: 400, message: 'email already exists..!' });
        }
    } catch (error) {
        res.status(400).json({ status: false, statusCode: 400, message: 'something went wrong..!', error: error.stack });
    }
});

/* login */
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const get = await user.findOne({ email });

        if (!get) {
            res.status(400).json({ status: false, statusCode: 400, message: 'Invalid email..!' });
        } else {
            let passCompare = await bcrypt.compare(password, get.password);
            if (!passCompare) {
                res.status(400).json({ status: false, statusCode: 400, message: 'Invalid password..!' });
            } else {
                let token = jwt.sign({_id : get._id}, jwt_key);
                res.status(200).json({ status: true, statusCode: 200, message: 'Verify successfully..!', token: token });
            }
        }
    } catch (error) {
        res.status(400).json({ status: false, statusCode: 400, message: 'something went wrong..!', error: error.stack });
    }
});

/* get user_by_id */
router.get('/user_by_id', auth, async (req, res) => {
    try {
        // const get = await user.findById({ _id: req.query._id }).select("-password");
        // let _id = req["AuthenticateUser"];
        const get = await user.findById(user_token._id).select("-password");

        if (get == null) {
            res.status(400).json({ status: false, statusCode: 400, message: 'something went wrong..!', data: get });
        } else {
            res.status(200).json({ status: true, statusCode: 200, message: 'Data found..!', data: get });
        }
    } catch (error) {
        res.status(400).json({ status: false, statusCode: 400, message: 'something went wrong..!', error: error.stack });
    }
});


/* get all users */
// router.get('/', async (req, res) => {
//     try {
//         const get = await user.find();

//         if (get.length > 0) {
//             res.status(200).json({ status: true, statusCode: 200, message: 'Data found..!', data: get });
//         } else {
//             res.status(200).json({ status: true, statusCode: 200, message: 'Data not available..!', data: get });
//         }
//     } catch (error) {
//         res.status(400).json({ status: false, statusCode: 400, message: 'something went wrong..!', error: error.stack });
//     }
// })

module.exports = router;