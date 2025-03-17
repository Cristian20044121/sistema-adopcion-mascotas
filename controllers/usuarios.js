import usuariosModelo from "../models/usuarios.js";
import bcrypt from "bcrypt";
class usuariosController {
  constructor() {}

  async register(req, res) {
    try {
      const { email, nombre, telefono, clave } = req.body;
      const usuarioExiste = await usuariosModelo.getOne({ email });
      if (usuarioExiste) {
        return res.status(400).json({ message: "Usuario ya existe" });
      }
      const claveEncriptada = await bcrypt.hash(clave, 10);
      const data = await usuariosModelo.create({
        email,
        nombre,
        telefono,
        clave: claveEncriptada,
      });
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al registrar usuario" });
    }
  }
  async login(req, res) {
    try {
      const { email, clave } = req.body;
      const usuarioExiste = await usuariosModelo.getOne({ email });
      if (!usuarioExiste) {
        return res.status(400).json({ message: "Usuario no existe" });
      }
      const claveValida = await bcrypt.compare(clave, usuarioExiste.clave);
      if (!claveValida) {
        return res.status(400).json({ message: "Clave incorrecta" });
      }
      return res.status(200).json({ message: "Usuario conectado" });
    } catch (error) {}
  }
}

export default new usuariosController();
