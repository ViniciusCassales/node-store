"use strict";
const express = require("express");

var superRouter = {
    router: express.Router(),
    init : function(controllerName){
        
        var controller = require(`../controllers/${controllerName}-controller`);

        this.router.get('/', controller.list);
        this.router.get('/:field/:value', controller.get);
        this.router.post('/', controller.create);
        this.router.put('/:id', controller.update);
        this.router.delete('/:id', controller.delete);
        return this.router;
    }
};

module.exports = superRouter;