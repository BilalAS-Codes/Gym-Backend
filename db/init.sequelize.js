const dbConfig = require("./connection.sequelize.js");
var Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // 👈 important for Neon
    },
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});


module.exports = sequelize;
