const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    img: {
        type: String,
        default: 'https://www.micreate.eu/wp-content/img/default-img.png'
    },
    todos: [{type: mongoose.Schema.Types.ObjectId, ref: 'Todo'}]

})

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

module.exports = {
    User:mongoose.model('User', userSchema),
    Todo:mongoose.model('Todo', todoSchema),
}