const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "users"
    },

    title: {
        type: String,
        required: [ true, "title is required" ],
        trim: true,
        default: null
    },

    description: {
        type: String,
        required: [ true, "description is required" ],
        trim: true,
        default: null
    },

    tag: {
        type: String,
        default: "General",
        trim: true
    },
    
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('notes', notesSchema);