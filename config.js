require('dotenv').config();

var cfg = {};

cfg.mongoUrl = process.env.MONGODB_URI;
cfg.firebaseDatabaseUrl = process.env.FIREBASE_DATABASE_URL;

module.exports = cfg;
