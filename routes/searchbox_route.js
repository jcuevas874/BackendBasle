var express = require('express');
var router = express.Router();
const { getSearchBoxController } = require ("../controller/searchbox_controller");

router.get("/searchs/:searchValue/category/:category", getSearchBoxController);

module.exports = router
