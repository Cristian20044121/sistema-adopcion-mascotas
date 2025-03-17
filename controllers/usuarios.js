import usuariosModelo from "../models/usuarios.js";
class usuariosController {
  constructor() {}

  async register(req, res) {
    try {
      const { email, nombre, telefono, clave } = req.body;
      const usuarioEiste = await usuariosModelo.findOne({ email });
      if (usuarioEiste) {
        return res.status(400).json({ message: "Usuario ya existe" });
      }
    } catch (error) {}
  }
  async login(req, res) {}
}
