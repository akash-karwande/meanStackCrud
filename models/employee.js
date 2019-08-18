
const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    position: {
        type: String,
        default: null
    },
    office: {
        type: String,
        default: null,
        trim: true
    },
    salary: {
        type: Number,
        required: true,
        minlength: 4
    }
});

module.exports = { Employee };