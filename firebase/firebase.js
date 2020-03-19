// require('dotenv').config();
// import firebase from 'firebase-admin';
const firebase = require('firebase');
// const config = require('../config.js');
// var serviceAccount = require('./service-account-key.json');
//
// export default firebase.initializeApp({
//     credential: firebase.credential.cert(serviceAccount),
//     databaseURL: config.firebaseDatabaseUrl
// })

const firebaseConfig = {
    apiKey: "AIzaSyBrjSoPXJkKJ6daoUPPrVoyJJwe3ssGUdY",
    authDomain: "ticketchain-8ff51.firebaseapp.com",
    databaseURL: "https://ticketchain-8ff51.firebaseio.com",
    projectId: "ticketchain-8ff51",
    storageBucket: "ticketchain-8ff51.appspot.com",
    messagingSenderId: "99545213132",
    appId: "1:99545213132:web:b9d820640de9a3b0f47a69",
    measurementId: "G-5P4CWKF3WD"
};
firebase.initializeApp(firebaseConfig);

module.exports = firebase;
