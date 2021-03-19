const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
const connection = require("./dataBase");

const Pergunta = connection.define("perguntas", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Pergunta.sync({ force: false }).then(() => {});
module.exports = Pergunta;
