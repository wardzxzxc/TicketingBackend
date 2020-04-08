//1. Import Express
const express = require('express');
const eventOrganiser = require('../controller/eventOrganiser');

//2. Import Express Router
const router = express.Router();

//Create event
router.post('/createevent', eventOrganiser.createEventContract);
//Get event by name
router.get('/:eventName', eventOrganiser.getEventByName);
//Get event by ownerAdddress
router.get('/:ownerAddressw', eventOrganiser.getEventsByOwnerAddress);
module.exports = router;
