"use strict";

const express = require("express");
const router= express.Router()

var productController = require(`../controllers/product-controller`);

router.get('/', productController.list);
router.get('/:field/:value', productController.get);
router.post('/', productController.create);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);
module.exports = router;