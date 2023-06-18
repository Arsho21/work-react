const express = require('express');
const router = express.Router();
const {Item} = require('./route.js') 

router.get('/', (req, res)=>{
    res.send('armenia')
})

router.post('/create',  async (req, res) => {
    try{
        const item = new Item() 
    }catch (e) {
        res.json({ message: e.message})
    }
})

module.exports = router;