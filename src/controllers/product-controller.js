"use strict";

const mongoose = require('mongoose')
const Product = mongoose.model('Product');

const controller = require("./super-controller");
const repository = require('../repositories/product-repository');
controller.setRepository(repository);
controller.setEntity("Produto");

module.exports = controller;