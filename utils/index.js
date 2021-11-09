const product = require("../models/sequelize/product.js")
const category = require("../models/sequelize/category.js");
const sequelize = require("../utils/sequelize.js");

const queryProduct = async () => {
    const dataProduct = await product.findAll({
        include: [{
            model: sequelize.models.category,
            required: true,
            order: [sequelize.col('name'),'ASC']
        }],
    });
    if (dataProduct) {
        return dataProduct
    }
}
const queryCategory = async (res, query) => {
    category.findall(query, (err, rows) => {
        if (err) throw err;
        if (rows.length > 0) {
        res.status(200).json({ results: rows });
        } else {
        res.status(200).json({ error: 'no existen productos!' });
        }
    });
}

module.exports = { queryProduct, queryCategory };
