const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.listen(8080, (erro) => {
  if (erro) {
    console.log("Erro ao rodar app!");
  } else {
    console.log("App rodando!");
  }
});
