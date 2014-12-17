// Include Express
var express = require('express');

// Initialize the Router
var router = express.Router();

var galleria = require('./galleria');
var database = require('./database');

// Setup a route /galleria/images
router.get('/galleria', galleria.getImages); 
router.post('/createPost', database.createPost); 
router.get('/getPosts', database.getPosts); 

// Expose the module
module.exports = router;
