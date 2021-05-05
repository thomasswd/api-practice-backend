const jwt = require('jsonwebtoken')

function auth(req, res, next) {
    const token = req.header('auth-token')
    if(!token) {
        return res.status(401).send('Access Denied')
    }

    try {
        //jwt method takes the token from the request header and verifies with the token secret
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        //verified returns the payload of the token (basically the ID)
        req.user = verified
        next()
    } catch (err){
        res.status(400).send('Invalid Token')
    }
}

module.exports = auth