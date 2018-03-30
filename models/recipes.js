const mongoose = require('mongoose');

// Schema for recipes
const recipeSchema = new mongoose.Schema({
    title: String,
    source: String,
    url: String
});

const Recipes = mongoose.model('Recipe', recipeSchema);

module.exports = Recipes;
