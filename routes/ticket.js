//1. Import Express
const express = require('express');
const ticket = require('../controller/ticket');


//2. Import Express Router
const router = express.Router();

//Create Ticket
router.post('/buyTicket', ticket.buyTicket);

module.exports = router;
