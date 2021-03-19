const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
const connection = require("./dataBase");

const Resposta = connection.define("respostas", {
  corpo: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  perguntaId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Resposta.sync({ force: false });

module.exports = Resposta;
