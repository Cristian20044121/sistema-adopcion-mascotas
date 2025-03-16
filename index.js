import express from "express";
import dotenv from "dotenv/config";
import routesMascotas from "./routes/mascotas.js";

const port = process.env.PORT || 3000;

const app = express();
app.use("/mascotas", routesMascotas);
app.get("/", (req, res) => {
  res.end("Binevenido");
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Error al iniciar servidor ${err}`);
  }
  console.log(`Servidor iniciado en el puerto ${port}`);
});
