const User = require('../models/Users.js');

module.exports.login = async(req, res, next) => {
    const publicAddress = req.body.publicAddress;
    const query = {
        publicAddress: publicAddress
    };
    try {
        const user = await User.findOne(query).exec();
        if(user == null) {
            //Create new user if not found
            await User.create({
                publicAddress: publicAddress,
            });
        }
        return res.status(200).json({
            message: "Login successful",
        });
    } catch(error) {
        return res.status(400).json({
            message: "Login unsuccessful",
        });
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

// module.exports.auth = async(req, res, next) => {
//     const publicAddress = req.body.publicAddress;
//     const signature = req.body.signature;
//     try {
//         const user = await User.findOne({publicAddress: publicAddress});
//         const msg = `I am signing my one-time nonce: ${user.nonce}`;
//
//         const msgBufferHex = ethUtil.bufferToHex(Buffer.from(msg, 'utf8'));
//         const address = sigUtil.recoverPersonalSignature({
//             data: msgBufferHex,
//             sig: signature
//         });
//         if (address.toLowerCase() === publicAddress.toLowerCase()) {
//             //Change to new nonce
//             user.nonce = Math.floor(Math.random() * 10000);
//             user.save();
//             const payload = {
//                 id: user.id,
//                 publicAddress
//             };
//             const token = jwt.sign(payload, config.jwtSecret, {
//                 expiresIn: "12H"
//             });
//             return res.status(200).json({
//                 message: "Login successful",
//                 token: token,
//                 role: user.role
//             });
//         } else {
//             return res
//                 .status(401)
//                 .json({
//                     message: "Login unsuccessful",
//                     error: 'Signature verification failed' });
//         }
//     } catch(err) {
//         return res.status(500).json({
//             message: 'An error occurred',
//             error: err
//         })
//     }
// };



