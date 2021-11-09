const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/sequelize.js');


const product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: true },
    url_image: { type: DataTypes.STRING, allowNull: true },
    price: { type: DataTypes.STRING, allowNull: true },
    discount: { type: DataTypes.INTEGER, allowNull: false },
    category: { type: DataTypes.INTEGER, allowNull: false },
},{ freezeTableName: true, createdAt: false, updatedAt: false })

module.exports = product