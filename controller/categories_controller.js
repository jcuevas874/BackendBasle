const { getCategoriesHandler } = require("../services") ;

const getCategoriesController = (req, res) => getCategoriesHandler(req, res);

module.exports = { getCategoriesController };
