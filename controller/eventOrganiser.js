const config = require('../config.js');
const Event = require('../models/Events');
const Web3 = require('web3');
const web3 = new Web3(config.gethNetwork);


module.exports.createEventContract = async (req, res, next) => {
    try {
        await Event.create(req.body);
        return res.status(201).json({
            message: "Event created successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred",
            error: error
        });
    }
};

module.exports.getEventByName = async (req, res, next) => {
    try {
        const event = Event.findOne({name: req.params.eventName});
        if(event) {
            return res.status(200).json({
                message: "Event found successfully",
                event
            })
        } else {
            return res.status(404).json({
                message: "Event could not be found"
            })
        }
    } catch(error) {
        return res.status(500).json({
            message: "An error occurred",
            error: error
        });
    }
}


// const abi = JSON.parse(config.nftABI);
// // Smart contract EVM bytecode as hex
// const bytecode = config.nftByteCode;
// // Get list of accounts created
// const accounts = await web3.eth.getAccounts();
// const newContract = new web3.eth.Contract(abi);
// console.log("Deploying new NFT contract");
// newContract.deploy({
//     data: "0x" + bytecode
// }).send({
//     from: accounts[0]
// }).on('transactionHash', (hash) => {
//     console.log(hash);
// }).on('error', console.error)
