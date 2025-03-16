import express from "express";
import mascotaController from "../controllers/mascotaController.js";
const route = express.Router();

route.get("/", mascotaController.getAll);
route.get("/:id", mascotaController.getOne);
route.post("/", mascotaController.create);
route.put("/:id", mascotaController.update);
route.delete("/:id", mascotaController.delete);

export default route;
