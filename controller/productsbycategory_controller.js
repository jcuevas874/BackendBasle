const { getProductsByCategoryHandler } = require("../services") ;

const getProductsByCategoryController = (req, res) => getProductsByCategoryHandler(req, res);

module.exports = { getProductsByCategoryController };
