//1. Import Express
const express = require('express');
const auth = require('../controller/firebaseAuth');

//2. Import Express Router
const router = express.Router();
const Users = require('../models/Users');

//Sign Up
router.post('/signup', auth.signUp);
//Login
router.post('/login', auth.login);

module.exports = router;
