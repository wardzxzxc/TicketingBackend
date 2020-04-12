//1. Import Express
const express = require('express');
const ticket = require('../controller/ticket');


//2. Import Express Router
const router = express.Router();

//Create Ticket
router.post('/buyTicket', ticket.buyTicket);
//Edit Ticket by eventId and ticketId
router.put('/ticketId/:ticketId/eventId/:eventId', ticket.editTicketByEventIdAndTicketId);
//Get Tickets by eventId and
router.get('/currentOwner/:address/eventId/:eventId', ticket.getTicketsByAddressAndEventId);
//Get Tickets by Address
router.get('/currentOwner/:address', ticket.getTicketsByAddress);

module.exports = router;
