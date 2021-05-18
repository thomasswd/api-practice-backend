const mongoose = require('mongoose')

const commentModel = new mongoose.Schema({
    body: {
        type: String,
        required: 'Post requires text'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Comment', commentModel)