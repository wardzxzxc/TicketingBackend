const Ticket = require('../models/Tickets');



module.exports.createTicket = async (req, res, next) => {
    try {
        await Ticket.create(req.body);
        return res.status(201).json({
            message: "Ticket created successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred",
            error: error
        });
    }
};
