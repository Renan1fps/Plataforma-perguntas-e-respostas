const express = require("express");
const app = express();
const connection = require("./dataBase/dataBase");
const perguntaModel = require("./dataBase/Pergunta");

connection
  .authenticate()
  .then(() => {
    console.log("Conexão estabelecida com o banco de dados!");
  })
  .catch((erro) => {
    console.log("erro");
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar.ejs");
});

app.post("/salvarpergunta", (req, res) => {
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  res.send(
    "formulario recebido! " + `Titulo: ${titulo}, Descrição: ${descricao}`
  );
});

app.listen(8080, (erro) => {
  if (erro) {
    console.log("Erro ao rodar app!");
  } else {
    console.log("App rodando!");
  }
});
