const express = require('express')
const dotenv = require('dotenv')
const passport = require('passport')
const authRoutes = require('./routes/authRoutes')


dotenv.config({ path: './config/variables.env'})

const app = express();

app.use('/auth/', authRoutes)
app.use('/posts', authRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Connected to port: ${PORT} on server: ...`)
})


// /posts/:postid/comments/:commentid
// /register/
// /login

