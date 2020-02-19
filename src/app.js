'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

/* Mongoose DeprecationWarning */
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
/* END Mongoose DeprecationWarning */

mongoose.connect('mongodb+srv://api-user-db:Lms8h96zVLNj5DHl@cluster0-u2kkq.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

// Fazer conversão de obj->json no response
// urlencode nos parâmetros da url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));

/* Carrega Models */
const Product = require('./models/product');
/* END Carrega Models */


/* Carrega Rotas */
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
/* END Carrega Rotas */

/* Aplica as Rotas */
app.use('/', indexRoute );
app.use('/products', productRoute );
/* END Aplica as Rotas */

module.exports = app;