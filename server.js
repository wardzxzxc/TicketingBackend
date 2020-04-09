const express = require('express');
const mongoose = require('mongoose');
const config = require('./config.js');
const helmet = require('helmet');
const Web3 = require('web3');

//Connect to localhost MongoDB using Mongoose ORM, 1 ARG: Database Address, 2 ARG: Callback func for confirmation of setup
mongoose.connect(config.mongoUrl, { useNewUrlParser: true }) //returns a "promise", if success or error
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
//Helmet for security
app.use(helmet());
//Handling CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"),
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-Width, Content-Type, Accept, Authorization"
        );
    res.header(
        "Access-Control-Allow-Methods",
        "PATCH, POST, GET, PUT, DELETE, OPTIONS"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

//Tell Express to use that for the "RESTful" /users paths
//Import Routes Creates in 'routes' folder
const users = require('./routes/users');
const eventOrganiser = require('./routes/eventOrganiser');
const ticket = require('./routes/ticket');
app.use('/users', users);
app.use('/eventorganiser', eventOrganiser);
app.use('/ticket', ticket);
app.get('/', (req, res, next) => {
   res.json({
       confirmation: 'success',
       data: 'TicketChain backend is running'
   })
});

app.listen(process.env.PORT || 5000);
console.log('App running http://localhost:5000');
