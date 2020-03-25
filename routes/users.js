//1. Import Express
const express = require('express');
const user = require('../controller/user');

//2. Import Express Router
const router = express.Router();

//Sign Up
router.post('/signup', user.signUp);
//Login
router.post('/login', user.login);
//Get User (currently only by address)
router.get('/', user.getUser);
//Metamask auth
router.post('/auth', user.auth);

module.exports = router;
