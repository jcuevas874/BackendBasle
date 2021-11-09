var express = require('express');
var router = express.Router();
const { getProductsController } = require("../controller/products_controller");

router.get("/products", getProductsController)

module.exports = router
