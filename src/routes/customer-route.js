"use strict";

const express = require("express");
const router= express.Router()

var customerController = require(`../controllers/customer-controller`);

router.get('/', customerController.list);
router.get('/:field/:value', customerController.get);
router.post('/', customerController.create);
router.put('/:id', customerController.update);
router.delete('/:id', customerController.delete);
module.exports = router;