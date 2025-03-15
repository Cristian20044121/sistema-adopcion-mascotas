import express from "express";
import dotenv from "dotenv";
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.end("Binevenido");
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Error al iniciar servidor ${err}`);
  }
  console.log(`Servidor iniciado en el puerto ${port}`);
});
