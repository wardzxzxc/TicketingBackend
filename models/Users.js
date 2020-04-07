const mongoose = require('mongoose');

//Schema is a method in the mongoose library which takes 1 JSON argument
const Users = new mongoose.Schema({
    publicAddress: {type: String, unique: true},
});

module.exports = mongoose.model('Users', Users);
