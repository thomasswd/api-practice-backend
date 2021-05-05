const mongoose = require('mongoose')

const dbConnect = async () => {

    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })

    mongoose.connection.on('error', (err) => {
        console.error(err.message)
    })

    console.log(`Connected to host: ${conn.connection.host}`)

}

module.exports = dbConnect