const User = require('../models/Users.js');
const firebase = require('../firebase/firebase.js');

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
