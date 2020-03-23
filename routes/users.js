//1. Import Express
const express = require('express');
const user = require('../controller/user');

//2. Import Express Router
const router = express.Router();
const Users = require('../models/Users');

//Sign Up
router.post('/signup', user.signUp);
//Login
router.post('/login', user.login);
//Get User (currently only by address)
router.get('/', user.getUser);

module.exports = router;
