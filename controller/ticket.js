const Ticket = require('../models/Tickets');


module.exports.buyTicket = async (req, res, next) => {
    try {
        const ticketId = req.body.ticketId;
        const ticket = await Ticket.findOne({
            ticketId: ticketId
        }).exec();
        if (ticket) {
            const newOwner = req.body.currentOwner;
            await ticket.update({
                currentOwner: newOwner
            });
            return res.status(201).json({
                message: "Ticket successfully bought"
            });
        } else {
            await Ticket.create(req.body);
            return res.status(201).json({
                message: "Ticket successfully bought"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred",
            error: error
        });
    }
};

module.exports.getTickets = async (req, res, next) => {
    try {
        const tickets = await Ticket.find({currentOwner: req.params.address}).exec();
        return res.status(200).json({
            message: "Ticket(s) found successfully",
            tickets: tickets
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred",
            error: error
        });
    }
};


