const mongoose = require('mongoose');

//Schema is a method in the mongoose library which takes 1 JSON argument
const Events = new mongoose.Schema({
    transactionHash: {type: String, required: true},
    address: {type: String, required: true},
    name: {type: String, required: true, unique: true}
});

module.exports = mongoose.model('Events', Events);
