// CHANGE ROUTER FILE NAME AS NEEDED FOR YOUR PROJECT
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// CHANGE SCHEMA MODULE FILE NAME AND NAME AS NEEDED FOR YOUR PROJECT
const SCHEMANAMEHEREMODULE = require('../modules/schema.module');
// CHANGE SCHEMA NAME AS NEEDED FOR YOUR PROJECT
let SCHEMANAMEHERE = SCHEMANAMEHEREMODULE;
let NAMEHERE = mongoose.model('NAMEHERE', SCHEMANAMEHERE);

module.exports = router;