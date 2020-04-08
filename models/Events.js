const mongoose = require('mongoose');

//Schema is a method in the mongoose library which takes 1 JSON argument
const Events = new mongoose.Schema({
    address: {type: String, required: true, unique: true},
    name: {type: String, required: true, unique: true},
    imageUrl: {type: String, required: true},
    description: {type: String, required: true},
    ownerAddress: {type: String, required: true},

});

module.exports = mongoose.model('Events', Events);
