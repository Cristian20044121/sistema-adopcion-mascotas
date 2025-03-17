import Usuario from "../schemas/usuarios.js";
import mongoose from "mongoose";
class usuariosModel {
  async create(mascota) {
    return await Usuario.create(mascota);
  }
  async getAll() {
    return await Usuario.find();
  }
  async getOne(id) {
    return await Usuario.findById(id);
  }
  async update(id, mascota) {
    return await Usuario.findOneAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(id),
      },
      mascota,
      { new: true }
    );
  }
  async delete(id) {
    return await Usuario.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(id),
    });
  }
}

export default new usuariosModel();
