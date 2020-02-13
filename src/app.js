'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://api-user-db:Lms8h96zVLNj5DHl@cluster0-u2kkq.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));

const indexRoute = require('../routes/index-route');
app.use('/', indexRoute );

const productRoute = require('../routes/product-route');
app.use('/products', productRoute );

module.exports = app;