const getProducts = require("./products_route")
const getCategories = require("./categories_route")
const getProductsByCategoryController = require("./productsbycategory_route")
const getSearchBox = require("./searchbox_route")

module.exports = { getProducts, getCategories, getProductsByCategoryController, getSearchBox }
