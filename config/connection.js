const Sequelize = require('sequelize');
require('dotenv').config()
// Create a connection object
const sequelize = new Sequelize(
  procces.env.DB_NAME,
  procces.env.DB_ROOT,
  procces.env.DB_PASSWORD,
  {
    // Database location
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;