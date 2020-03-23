'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

/* Mongoose DeprecationWarning */
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
/* END Mongoose DeprecationWarning */

mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});

// Fazer conversão de obj->json no response
// urlencode nos parâmetros da url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));

/* Carrega Models */
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

/* END Carrega Models */


/* Carrega Rotas */
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route.js');
/* END Carrega Rotas */

/* Aplica as Rotas */
app.use('/', indexRoute );
app.use('/products', productRoute );
app.use('/customers', customerRoute );
/* END Aplica as Rotas */

module.exports = app;