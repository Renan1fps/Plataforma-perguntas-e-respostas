const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/:nome/:lang", (req, res) => {
  var nome = req.params.nome;
  var lang = req.params.lang;
  var msg= true;
  res.render("index.ejs", {
    nome: nome,
    lang: lang,
    mensagem: msg
  });
});

app.listen(8080, (erro) => {
  if (erro) {
    console.log("Erro ao rodar app!");
  } else {
    console.log("App rodando!");
  }
});
