const config = require('../config.js');
const Listing = require('../models/Listings');
const Web3 = require('web3');


module.exports.createListing = async (req, res, next) => {
    try {
        await Listing.create(req.body);
        return res.status(201).json({
            message: "Listing created successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred",
            error: error
        });
    }
};
