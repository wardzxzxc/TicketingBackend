require('dotenv').config();

var cfg = {};

cfg.mongoUrl = process.env.MONGODB_URI;
cfg.firebaseDatabaseUrl = process.env.FIREBASE_DATABASE_URL;
cfg.jwtSecret = process.env.JWT_SECRET;
cfg.gethNetwork = process.env.GETH_NETWORK;
cfg.nftABI = process.env.NFT_ABI;
cfg.nftByteCode = process.env.NFT_BIN;

module.exports = cfg;
