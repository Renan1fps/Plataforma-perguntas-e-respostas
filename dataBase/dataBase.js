const sequelize = require("sequelize");
const connection = new sequelize("guiaperguntas", "root", "20030927", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
