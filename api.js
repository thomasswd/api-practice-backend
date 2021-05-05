const express = require('express')
const dotenv = require('dotenv')
const passport = require('passport')
const authRoutes = require('./routes/authRoutes')
const postRoutes = require('./routes/postRoutes')
const dbConnect = require('./config/db')

dotenv.config({ path: './config/variables.env'})

dbConnect()

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hey')
})

app.use('/auth', authRoutes)
app.use('/posts', postRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Connected to port: ${PORT} on server: ...`)
})


// /posts/:postid/comments/:commentid
// /register/
// /login

