"use strict";

const superRoute = require("./super-route");
var controllerName = 'product';
const definedRoutes = {
    get: true,
    getOne: true,
    create: true,
    update: true,
    delete: true,
};

var router = superRoute.init(controllerName, definedRoutes)

module.exports = router;