var express = require('express');
var router = express.Router();
const { getProductsByCategoryController} = require("../controller/productsbycategory_controller");

router.get("/products/:category", getProductsByCategoryController)

module.exports = router
