const mongoose = require('mongoose');

//Schema is a method in the mongoose library which takes 1 JSON argument
const Tickets = new mongoose.Schema({
    eventId: {type: String, required: true},
    currentOwner: {type: String, required: true},
    ticketId: {type: String, required: true},
    resellListed: { type: Boolean, default: false}
});

module.exports = mongoose.model('Tickets', Tickets);

