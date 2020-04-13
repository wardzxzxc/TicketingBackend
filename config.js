require('dotenv').config();

var cfg = {};

cfg.mongoUrl = process.env.MONGODB_URI;
cfg.jwtSecret = process.env.JWT_SECRET;


module.exports = cfg;
