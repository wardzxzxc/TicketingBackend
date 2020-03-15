require('dotenv').config();

var cfg = {};

cfg.mongoUrl = process.env.MONGODB_URI

module.exports = cfg;
