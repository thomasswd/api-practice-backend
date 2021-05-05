const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: 'An email is required'
    },
    password: {
        type: String,
        required: 'A password is required',
        min: 6,
        max: 12
    }
})

module.exports = mongoose.model('User', userModel)