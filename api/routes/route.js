const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const { Todo, User } = require('../models/schema')

router.get('/get', async (req, res) => {
    try {
        // const user = await User.findById(req.user.id);
        // req.statusCode(200).json(user.todos);
        const user = await Todo.find();
        res.status(200).json(user.todos);
    }catch (e) {
        res.status(400).json({ message: e.message});
    }
});


router.post('/create', async (req, res) => {
    try {
        const item = new Todo(req.body);

        await item.save();
        res.status(200).json({ message: 'okey'});
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});


router.post('/userCreate', async (req, res) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt);
        const user = new User({...req.body, password: hashPassword});

        const {password, ...others} = user._doc;

        await user.save();
        res.status(201).json(others);
    }catch (e) {
        res.status(400).json({ message: e.message });
    }
});


router.delete('/delete/:id', async (req, res) => {
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json(todo);
    }catch (e) {
        res.status(400).json({ message: e.message});
    }
});


router.put('/update/:id', async (req, res) => {
    try{
        const todo = await Todo.findById(req.params.id);
        todo.completed = !todo.completed;
        await todo.save();

        res.status(200).json(todo);
    }catch (e) {
        res.status(400).json({ message: e.message });
    }
})

module.exports = router;