const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipes.js');

// Index Route
router.get('/', (req, res)=>{
    res.send('Sending...')
});



module.exports = router;
