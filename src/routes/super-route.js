/**
 * Define as todas básicas com base no atributo definedRoutes
    get: pode listar
    getOne: pode detalhar um
    create: pode criar
    update: pode atualizar
    delete: pode deletar
 */
"use strict";
const express = require("express");

var superRouter = {
    router: express.Router(),
    init : function(controllerName, definedRoutes){

        var controller = require(`../controllers/${controllerName}-controller`);

        definedRoutes.get && this.router.get('/', controller.list);
        definedRoutes.getOne && this.router.get('/:field/:value', controller.get);
        definedRoutes.create && this.router.post('/', controller.create);
        definedRoutes.update && this.router.put('/:id', controller.update);
        definedRoutes.delete && this.router.delete('/:id', controller.delete);
        return this.router;
    }
};

module.exports = superRouter;