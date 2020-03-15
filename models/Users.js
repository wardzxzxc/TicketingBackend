const mongoose = require('mongoose');

//Schema is a method in the mongoose library which takes 1 JSON argument
const Users = new mongoose.Schema({
    username : {type: String, default: ''},
    pin : {type: Number, default: 0},
    firstName: {type:String, default: 'James'},
    lastName: {type:String, default: 'Tan'},
    email: {type:String, default: 'james@testing.com'},
    riskAppetite: {type:Number, default: 1},
    retirementYear: {type:Number, default: 2020},
    birthYear: {type:Number, default: 1980},
    idealRetirementIncome: {type:Number, default: 200000.00},
    projectedRetirementIncome: {type:Number, default: 500000.00},
    currentNetworth: {type:Number, default: 60000.00},
    monthlyIncome: {type:Number, default: 10000.00},
    monthlyExpense: {type:Number, default: 5000.00},
    firebaseId: {type: String}
});

module.exports = mongoose.model('Users', Users);
