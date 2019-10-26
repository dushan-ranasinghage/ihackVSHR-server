const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

//Atlas connection
mongoose.connect('mongodb+srv://dushan:dushan123@dplcluster-erkzj.mongodb.net/dplbags?retryWrites=true', { useNewUrlParser: true });

//Show route request info in console
app.use(morgan('dev'));

//BodyParser middleware for POST req(sending data in body)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Root html page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

//Cross Origin Handle Middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if( req.method === 'OPTIONS'){
        req.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//Routes which starts server
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);


//Error handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error,req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;