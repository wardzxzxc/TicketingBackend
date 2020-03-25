const mongoose = require('mongoose');

//Schema is a method in the mongoose library which takes 1 JSON argument
const Users = new mongoose.Schema({
    firebaseId: {type: String, required: true},
    email: {type: String, required: true},
    publicAddress: {type: String, unique: true},
    nonce: {type: Number, default: Math.floor(Math.random() * 1000000)},
    role: {
        type: String,
        enum : ['admin', 'event organiser', 'customer'],
        default: 'customer',
        required: true
    },
});

module.exports = mongoose.model('Users', Users);
