const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar.ejs");
});

app.post("/salvarpergunta", (req, res) => {
  res.send("formulario recebido!");
});

app.listen(8080, (erro) => {
  if (erro) {
    console.log("Erro ao rodar app!");
  } else {
    console.log("App rodando!");
  }
});
