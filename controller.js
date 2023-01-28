import { listaMaisModelos } from "./src/listaMaisModelos.js";
import { listaMenosModelos } from "./src/listaMenosModelos.js";
import { listaModelos } from "./src/listaModelos.js";
import { maisModelos } from "./src/maisModelos.js";
import { menosModelos } from "./src/menosModelos.js";
import express from "express";

const app = express();
app.use(express.json());

app.get("/listaMaisModelos/:valor", function (req, res) {
  res.send(listaMaisModelos(req.params.valor));
});

app.get("/listaMenosModelos/:valor", (req, res) => {
  res.send(listaMenosModelos(req.params.valor));
});

app.post("/listaModelos", (req, res) => {
  res.send(listaModelos(req.body));
});

app.get("/maisModelos", (req, res) => {
  res.send(maisModelos());
});

app.get("/menosModelos", (req, res) => {
  res.send(menosModelos());
});

app.listen(3000, () => {
  console.log("API Started! 3000");
});
