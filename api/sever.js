require('dotenv').config()
const express = require('express');

const mongoose = require('mongoose');
const app = express();
const router = require('./routes/route')



app.use('/api', router)

// const {User, Todo} = require('./models/schema'

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {

    console.log('connection to mongoDb');
    app.listen(process.env.PORT, (err) => {
        err ? console.log(err) : console.log('Server is listening');
    })
})