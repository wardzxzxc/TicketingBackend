//1. Import Express
const express = require('express');
const user = require('../controller/user');

//2. Import Express Router
const router = express.Router();

//Login
router.post('/login', user.login);
//Get User (currently only by address)
router.get('/', user.getUser);

module.exports = router;
