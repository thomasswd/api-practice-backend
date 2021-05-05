const mongoose = require('mongoose')

const commentModel = new mongoose.Schema({
    body: {
        type: String,
        required: 'Post requires text'
    },
    Date: {
        type: Date,
    }
})

module.exports = mongoose.model('Post', postModel)