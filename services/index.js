const { getCategoriesHandler } = require("./categories_service");
const { getProductsHandler } = require("./products_service");
const { getProductsByCategoryHandler } = require("./productsbycategory_service")
const { getSearchBoxHandler } = require("./searchbox_service")

module.exports = { getCategoriesHandler, getProductsHandler, getProductsByCategoryHandler, getSearchBoxHandler}
