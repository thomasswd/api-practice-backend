const express = require('express')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const registerUser = async(req, res) => {

    //const { error } = registerValidation()

    //check if user already exists
    const userExists = await User.findOne({
        email: req.body.email
    })
    if(userExists) {
        return res.status(400).send('Email already exists')
    }

    //hash the pw using brcypt for security 
     const salt = await bcrypt.genSalt(10)
     const hashPW = await bcrypt.hash(req.body.password, salt)

     //set a new user profile and set pw to the hash
     const user = new User({
         name: req.body.name,
         email: req.body.email,
         password: hashPW,
     })

     try {
        await user.save()
        res.send(user.name)
        
     } catch (err) {
         res.status(400).send(err)
     }

}

const loginUser = async(req, res) => {

    const user = await User.findOne({
        email: req.body.email
    })
    if(!user) {
        return res.status(400).send('User does not exist')
    }

    const validPW = await bcrypt.compare(req.body.password, user.password)
    if(!validPW) {
        return res.status(400).send('Invalid Password')
    }

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token)
}

module.exports.registerUser = registerUser;
module.exports.loginUser = loginUser;