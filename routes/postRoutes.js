const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const tokenVerify = require('../tokenVerification')

router.get('/', async(req, res) => {

    try {
        const posts = await Post.find()

        res.json(posts)
        //res.send(req.body.text)
    } catch (err) {
        console.error(err)
    }
})

router.post('/', async(req, res) => {

    try {
        const post = await new Post({
            title: req.body.title,
            text: req.body.text
        })

        await post.save()

        res.json(post)
    } catch (err) {
        console.error(err)
    }

})

router.get('/:postId', (req, res) => {
    
})

router.get('/:postId/comments', (req, res) => {
    
})

router.get('/:postId/comments/:commentId', (req, res) => {
    
})

module.exports = router