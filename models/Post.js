const mongoose = require('mongoose')

const postModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: 'Post requires text'
    },
    Date: {
        type: Date,
    }
})

module.exports = mongoose.model('Post', postModel)