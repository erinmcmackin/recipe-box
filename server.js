// Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Controllers
const recipesController = require( './controllers/recipes.js' );
app.use('/recipes', recipesController);

// Mongoose Connection
mongoose.connect('mongodb://localhost:27017/recipe-book');
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...');
});

// Configuration and Listener
app.listen(3000, ()=>{
    console.log('Trent <3 Aubrey');
});
