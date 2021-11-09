const { getProductsHandler } = require("../services") ;

const getProductsController = (req, res) => getProductsHandler(req, res);

module.exports = { getProductsController };
