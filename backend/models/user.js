const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [ true, "name is required" ],
        minlength: 3,
        trim: true,
        default: null
    },

    email: {
        type: String,
        required: [ true, "email is required" ],
        unique: true,
        trim: true,
        default: null,
        validate: {
            validator: function (v) {
              return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
          }
    },

    password: {
        type: String,
        required: [ true, "password is required" ],
        trim: true,
        minlength: 5
    },

    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('users', userSchema);
// const user = mongoose.model('users', userSchema);

// user.createIndexes();

// insertOne = async (query) => {
//     try {
//         return await new user(query).save();
//     } catch (error) {
//         return error;
//     }
// }

// find = async () => {
//     try {
//         return await user.find();
//     } catch (error) {
//         return error;
//     }
// }

// findOne = async (query) => {
//     try {
//         return await user.findById(query);
//     } catch (error) {
//         return error;
//     }
// }


// module.exports  = {
//     insertOne,
//     find,
//     findOne
// };