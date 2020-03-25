const User = require('../models/Users.js');
const firebase = require('../firebase/firebase.js');
const jwt = require('jsonwebtoken');
const config = require('../config');
const ethUtil = require('ethereumjs-util');
const sigUtil = require('eth-sig-util');

module.exports.signUp = async (req, res, next) => {
    try {
        const firebaseRes = await firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password);
        req.body.firebaseId = firebaseRes.user.uid;
        User.create(req.body, (err, account) => {
            if (err) {
                // Delete user committed to firebase
                var user = firebase.auth().currentUser;
                user.delete().then(() => {
                    return res.status(500).json({
                        message: 'An error occurred',
                        error: err
                    })
                }).catch(function (error) {
                    return res.status(500).json({
                        message: 'An error occurred',
                        error: error
                    })
                });
            } else {
                return res.status(201).json({
                    message: 'User created successfully'
                })
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: 'An error occurred',
            error: error.message
        })
    }
};

module.exports.login = async (req, res, next) => {
    try {
        const firebaseRes = await firebase.auth().signInWithEmailAndPassword(
            req.body.email, req.body.password
        );
        const firebaseId = firebaseRes.user.uid;
        const user = await User.findOne({"email": req.body.email}).exec();
        if (user) {
            const payload = {
                firebaseId,
                role: user.role,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            };
            const token = jwt.sign(payload, config.jwtSecret, {
                expiresIn: "12H"
            });
            return res.status(200).json({
                message: "Login successful",
                token: token
            })
        } else {
            return res.status(404).json({
                message: 'An error occurred',
                error: 'User cannot be found'
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: 'An error occurred',
            error: error.message
        })
    }
};

module.exports.getUser = async(req, res, next) => {
    try {
        let query = req.query;
        const user = await User.findOne(query).exec();
        if (user) {
            return res.status(200).json({
                message: "User found",
                user
            })
        } else {
            return res.status(404).json({
                message: 'User cannot be found',
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: 'An error occurred',
            error: error.message
        })
    }
};

module.exports.auth = async(req, res, next) => {
    const publicAddress = req.body.publicAddress;
    const signature = req.body.signature;
    try {
        const user = await User.findOne({publicAddress: publicAddress});
        const msg = `I am signing my one-time nonce: ${user.nonce}`;

        const msgBufferHex = ethUtil.bufferToHex(Buffer.from(msg, 'utf8'));
        const address = sigUtil.recoverPersonalSignature({
            data: msgBufferHex,
            sig: signature
        });
        if (address.toLowerCase() === publicAddress.toLowerCase()) {
            //Change to new nonce
            user.nonce = Math.floor(Math.random() * 10000);
            user.save();
            const payload = {
                id: user.id,
                publicAddress
            };
            const token = jwt.sign(payload, config.jwtSecret, {
                expiresIn: "12H"
            });
            return res.status(200).json({
                message: "Login successful",
                token: token,
            });
        } else {
            return res
                .status(401)
                .json({
                    message: "Login unsuccessful",
                    error: 'Signature verification failed' });
        }
    } catch(err) {
        return res.status(500).json({
            message: 'An error occurred',
            error: err
        })
    }
};



