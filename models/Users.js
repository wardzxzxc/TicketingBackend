const mongoose = require('mongoose');

//Schema is a method in the mongoose library which takes 1 JSON argument
const Users = new mongoose.Schema({
    firebaseId: {type: String, required: true},
    firstName: {type: String, required: true},
    email: {type: String, require: true},
    lastName: {type: String, required: true},
    walletAddress: {type: String},
    role: {
        type: String,
        enum : ['admin', 'event organiser', 'customer'],
        default: 'customer',
        required: true
    },
});

module.exports = mongoose.model('Users', Users);
