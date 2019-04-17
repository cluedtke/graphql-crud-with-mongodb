var mongoose = require('mongoose');

module.exports = mongoose.model('book', new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
}));
