// CHANGE ROUTER FILE NAME AS NEEDED FOR YOUR PROJECT
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// CHANGE SCHEMA MODULE FILE NAME AND NAME AS NEEDED FOR YOUR PROJECT
const favoritesSchemaModule = require('../modules/schema-module');
// CHANGE SCHEMA NAME AS NEEDED FOR YOUR PROJECT
let favoritesSchema = favoritesSchemaModule;
let Favorite = mongoose.model('Favorite', favoritesSchema);

// START GET ROUTE


// END GET ROUTE

// START POST ROUTE


// END POST ROUTE

// START DELETE ROUTE


// END DELETE ROUTE

module.exports = router;