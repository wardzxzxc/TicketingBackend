//1. Import Express
const express = require('express');
const listing = require('../controller/listing');

//2. Import Express Router
const router = express.Router();

//Create Listing
router.post('/createListing', listing.createListing);

module.exports = router;
