const express = require('express');
const router = express.Router();
const notes = require('../models/notes');
const user = require('../models/user');
const auth = require('../middlewares/auth').isValidToken;

/* add new note */
router.post('/add_notes', auth, async (req, res) => {
    try {
        req.body.user_id = user_token._id;
        const create = await notes(req.body).save();
        if (create._id) {
            res.status(200).json({ status: true, statusCode: 200, message: 'Note inserted successfully..!', data: create });
        } else {
            res.status(400).json({ status: false, statusCode: 400, message: 'something went wrong..!', data: create });
        }
    } catch (error) {
        res.status(400).send({ status: false, statusCode: 400, message: 'something went wrong..!', error: error.message });
    }
});

/* get all notes */
router.get('/get_all_notes', auth, async (req, res) => {
    try {
        const get = await notes.find({ user_id: user_token._id });
        if (get.length > 0) {
            res.status(200).json({ status: true, statusCode: 200, message: 'Data found..!', no_of_records: get.length, data: get });
        } else {
            res.status(200).json({ status: true, statusCode: 200, message: 'Data not available..!', data: get });
        }
    } catch (error) {
        res.status(400).send({ status: false, statusCode: 400, message: 'something went wrong..!', error: error.message });
    }
});

/* update note */
router.put('/update_note/:id', auth, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const newNote = {};             // create a new Note object
        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }

        let get = await notes.findById(req.params.id);
        if (!get) {
            return res.status(400).send({ status: false, statusCode: 400, message: 'Data not found..!' });
        }

        if (get.user_id.toString() !== user_token._id) {
            return res.status(401).json({ status: false, message: "Unauthorized! Please login" });
        }

        const update = await notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.status(200).json({ status: true, statusCode: 200, message: 'Note updated successfully..!', data: update });
    } catch (error) {
        res.status(400).send({ status: false, statusCode: 400, message: 'something went wrong..!', error: error.message });
    }
});

/* delete note */
router.delete('/delete_note/:id', auth, async (req, res) => {
    try {
        let get = await notes.findById(req.params.id);

        if (!get) {
            return res.status(400).send({ status: false, statusCode: 400, message: 'Data not found..!' });
        }

        if (get.user_id.toString() !== user_token._id) {
            return res.status(401).json({ status: false, message: "Unauthorized! Please login" });
        }

        const remove = await notes.findByIdAndDelete(req.params.id);
        res.status(200).json({ status: true, statusCode: 200, message: 'Note deleted successfully..!', data: remove });
    } catch (error) {
        res.status(400).send({ status: false, statusCode: 400, message: 'something went wrong..!', error: error.message });
    }
});

module.exports = router;