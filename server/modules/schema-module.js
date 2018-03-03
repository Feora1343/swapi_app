// CHANGE SCHEMA MODULE FILE NAME AND NAME AS NEEDED FOR YOUR PROJECT
const mongoose = require('mongoose');

let favoritesSchema = new mongoose.Schema(
    {
    url: {type: String, unique: true},
    name: {type: String},
    title: {type: String, default: false},
    favorited: {type: Boolean, default: false}       
    }   
)

module.exports = favoritesSchema;