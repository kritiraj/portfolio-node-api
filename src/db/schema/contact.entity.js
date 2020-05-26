const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    collection: "contactRequests"
})

module.exports = mongoose.model('contactRequests', schema);