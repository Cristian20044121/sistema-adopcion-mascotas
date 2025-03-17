import express from "express";
import "dotenv/config";
import dbClient from "./config/dbClient.js";
import routesMascotas from "./routes/mascotas.js";
import routesUsuarios from "./routes/usuarios.js";
import bodyParser from "body-parser";

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/pets", routesMascotas);
app.use("/users", routesUsuarios);
app.get("/", (req, res) => {
  res.end("Binevenido");
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Error al iniciar servidor ${err}`);
  }
  console.log(`Servidor iniciado en el puerto ${port}`);
});

app.on("SIGINT", () => {
  dbClient.cerrarConexion();
  process.exit();
});
