const express = require("express");
const app = express();
const connection = require("./dataBase/dataBase");
const Pergunta = require("./dataBase/Pergunta");

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
  Pergunta.findAll({  order:[
  ['id','DESC']
  ] }).then((perguntas) => {
    res.render("index.ejs", {
      perguntas: perguntas,
    });
  });
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar.ejs");
});

app.post("/salvarpergunta", (req, res) => {
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  }).then(() => {
    res.redirect("/");
  });
});

app.listen(8080, (erro) => {
  if (erro) {
    console.log("Erro ao rodar app!");
  } else {
    console.log("App rodando!");
  }
});
