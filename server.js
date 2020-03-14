//import parser from 'body-parser';

const express = require('express');
const mongoose = require('mongoose');

const Users = require('./models/Users');

//Connect to localhost MongoDB using Mongoose ORM, 1 ARG: Database Address, 2 ARG: Callback func for confirmation of setup
mongoose.connect('mongodb://localhost/ticketingmongodb', { useNewUrlParser: true }) //returns a "promise", if success or error
    .then(data => {
        console.log('Mongo DB connection success!')
    })
    .catch(err => {
        console.log('Mongo DB connection failed! ' + err.message)
    });
	
const app = express();

//Parse form data as JSON
app.use(express.json());
//Receive form data and properly parse it out
app.use(express.urlencoded({ extended: false }));
// app.use(parser.urlencoded({
//     extended: false
// }));

//Tell Express to use that for the "RESTful" /users paths
//Import Routes Creates in 'routes' folder
const users = require('./routes/users');
app.use('/users', users);

 
app.get('/', (req, res, next) => {
   res.json({
       confirmation: 'success',
       data: 'This is my Mongo Project!'
   })
});
 
app.listen(process.env.PORT || 5000);
console.log('App running http://localhost:5000');
