"use strict";

/* Define as rotas básicas de CRUD
@TODO criar um novo parâmetro para poder dizer quais rotas quer
*/
const superRoute = require("./super-route");
var controllerName = 'product';
var router = superRoute.init(controllerName)

module.exports = router;