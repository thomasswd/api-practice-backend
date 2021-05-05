const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getUsers } = require('../controllers/authControllers')
const tokenVerify = require('../tokenVerification')

router.post('/register', registerUser)

router.post('/login', loginUser)

router.get('/users', tokenVerify, getUsers)

module.exports = router