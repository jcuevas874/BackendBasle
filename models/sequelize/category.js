const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/sequelize.js');

const category = sequelize.define('category', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: true }
},{ freezeTableName: true, createdAt: false, updatedAt: false });

module.exports = category