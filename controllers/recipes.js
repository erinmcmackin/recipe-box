const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipes.js');

// Index Route
router.get('/', (req, res)=>{
    Recipes.find({}, (err, foundRecipes)=>{
        res.json(foundRecipes);
    });
});

// Create Route
router.post('/', (req, res)=>{
    Recipes.create(req.body, (err, createdRecipe)=>{
        res.json(createdRecipe);
    });
});

// Delete Route
router.delete('/:id', (req, res)=>{
    Recipes.findByIdAndRemove(req.params.id, (err, deletedRecipe)=>{
        res.json(deletedRecipe);
    });
});

// Update Route
router.put('/:id', (req, res)=>{
    Recipes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedRecipe)=>{
        res.json(updatedRecipe);
    });
});

module.exports = router;
