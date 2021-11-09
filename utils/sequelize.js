require("dotenv").config();
const { Sequelize } = require("sequelize");

const { DBHOST, USERDB, PASSWORD, DB, DIALECT, DBPORT } = process.env

const sequelize = new Sequelize(DB, USERDB, PASSWORD, {
    host: DBHOST,
    dialect: DIALECT,
    port: DBPORT
});

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

connect();

module.exports = sequelize