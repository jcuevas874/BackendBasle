var express = require('express');
var router = express.Router();
const { getCategoriesController } = require("../controller/categories_controller") ;

router.get("/categories", getCategoriesController);

module.exports = router;
