//1. Import Express
const express = require('express');

//2. Import Express Router
const router = express.Router();
const Users = require('../models/Users');
//GET Router BASE path '/'
router.get('/', (req, res, next) => {
    Users.find()
        .then(users => {
            res.json({
                confirmation: 'success',
                data: users
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'failed',
                message: err.message
            })
        })
});

//GET User by id
router.get('/:id', function(req, res, next) {
    Users.findById(req.params.id, function (err, users) {
        if (err) return next(err);
        res.status(200).json(users)
    })
});

//User Login
router.post('/login', (req, res, next) => {
    const username = req.body.username;
    const pin = req.body.pin;
    //Can use findOne is possible
    Users.find({username:username}, (err,users) => { //Returns an error or an ARRAY of users (but by right should be 1)
        if (err) {
            res.json({
                confirmation: 'failed',
                error: err
            })
        }
        else if(users.length == 0) {
            res.json({
                confirmation: 'failed',
                error: 'User not found'
            })
        }
        else {
            const user = users[0]; //Takes the first element of the returned 'users' array
            if(user.pin != req.body.pin) { //Checks for correct password
                res.json({
                    confirmation: 'failed',
                    error: 'Incorrect Pin'
                })
            }
            else {
                res.json({
                    confirmation: 'success',
                    users: user
                })
            }
        }
    })
});

//Create User
router.post('/', (req, res, next) => {
    //Check if user already exists using username
    const user = req.body;
    Users.findOne({username: user.username}, function(err, existingUser) {
        if(existingUser != null) {
            res.json({
                confirmation: 'User Already Exists!',
                error: err
            })
        }
        else {
            Users.create(req.body, (err, users) => {
                if (err) {
                    res.json({
                        confirmation: 'failed',
                        error: err
                    })
                }
                else {
                    res.json({
                        confirmation: 'success'
                    })
                }
            })
        }
    });
});

//Update User (Use Me!)
router.put('/:uid', (req, res, next) => {
    const updatedUser = req.body;
    const userId = req.params.uid;
    //{new:true} is to flush and refresh and send the newly updated object!
    Users.findByIdAndUpdate(userId, updatedUser, {new:true})
        .then(users => {
            res.json({
                confirmation: 'success',
                data: users
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'failed',
                message: err.message
            })
        })
});
//UPDATE/POST User by id

/*//Update Users using userId
//http://localhost:5000/countries/add?name=england&continent=europe&population=75
router.put('/:id', (req, res, next) => {
    const updatedDetails = req.query;
    const usersId = req.params.id;
    //{new:true} is to flush and refresh and send the newly updated object!
    //http://localhost:5000/countries/update/5d031a4d7a49ff29a06570dd?name=italy
    Users.findByIdAndUpdate(usersId, updatedDetails, {new:true})
        .then(users => {
            res.json({
                confirmation: 'success',
                data: users
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'failed',
                message: err.message
            })
        })
});*/

//TEST GET user by username and password
router.get('/test', (req, res, next) => {
    const query = req.query;
    //Pass in the Query from the browser
    //http://localhost:5000/users/test?username=username1&pin=123456
    Users.find(query) //{username: 'username1', pin: 123456}
        .then(users => {
            res.json({
                confirmation: 'success',
                data: users
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'failed',
                message: err.message
            })
        })
});
//3. Export the Router
module.exports = router;
