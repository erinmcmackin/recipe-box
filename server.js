const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Middleware
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.send('SENT');
})

// Mongoose Connection
mongoose.connect('mongodb://localhost:27017/recipes');
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...');
});

// Configuration and Listener
app.listen(3000, ()=>{
    console.log('Trent <3 Aubrey');
});
