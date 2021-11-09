const { getCategoriesController } = require("./categories_controller");
const { getProductsController } = require("./products_controller");
const { getProductsByCategoryController } = require("./productsbycategory_controller");
const { getSearchBoxController } = require("./searchbox_controller");

module.exports = { getCategoriesController,
                   getProductsController,
                   getProductsByCategoryController,
                   getSearchBoxController }
                   