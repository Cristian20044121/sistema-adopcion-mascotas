import mongoose from "mongoose";

const usuariosSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trirm: true,
  },
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  telefono: {
    type: String,
    required: false,
    trim: true,
  },
  clave: {
    type: String,
    required: true,
  },
});

export default mongoose.model("usuarios", usuariosSchema);
