// CHANGE SCHEMA MODULE FILE NAME AND NAME AS NEEDED FOR YOUR PROJECT
const mongoose = require('mongoose');

let favoritesSchema = new mongoose.Schema({
        url: {type: String, unique: true},
    // SHARED FIELDS
        name: {type: String},
        title: {type: String, default: false},
    // PEOPLE
        birth_year: {type: String},
        gender: {type: String},
    // FILMS
        opening_crawl: {type: String},
    // SHARED STARSHIP & VEHICLE FIELDS
        manufacturer: {type: String},
        passengers: {type: String},
        capacity: {type: String},
    // PLANETS
        population: {type: String},
        climate: {type: String},
    // SPECIES
        language: {type: String},
        classification: {type: String},
    // FAVORITE
        favorited: {type: Boolean, default: false}
})

module.exports = favoritesSchema;