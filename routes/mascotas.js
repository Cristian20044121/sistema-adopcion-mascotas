import express from "express";
import mascotaController from "../controllers/mascotaController.js";
import { verificarToken } from "../helpers/autenticacion.js";
const route = express.Router();

route.get("/", mascotaController.getAll);
route.get("/:id", mascotaController.getOne);
route.post("/", mascotaController.create);
route.put("/:id", verificarToken, mascotaController.update);
route.delete("/:id", verificarToken, mascotaController.delete);

export default route;
