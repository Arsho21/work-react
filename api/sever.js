require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/route')


app.use(express.json())
app.use(cors({
    origin: '*'
}))
app.use('/api', router)


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