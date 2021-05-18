const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const Comment = require('../models/Comment')
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

router.get('/:postId', async(req, res) => {

    console.log(req.params.postId)
    
    try {
        const post = await Post.findById(req.params.postId)

        res.json(post)
    } catch (err) {
        console.error(err)
    }

})

router.post('/:postId/addComment', async(req, res) => {
    
    try {
        //res.send(req.params)
        const comment = await new Comment({
            body: req.body.body 
        })
        res.json(comment)

        await comment.save()

    } catch (err) {

    }

})

router.post('/:postId/comments/:commentId', (req, res) => {
    
})

module.exports = router