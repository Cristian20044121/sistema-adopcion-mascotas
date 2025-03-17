import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
      enum: ["perro", "gato", "conejo", "pez", "pajaro", "reptil"],
    },
    raza: {
      type: String,
      required: true,
    },
    edad: {
      type: Number,
      required: true,
      min: [0, "La edad no puede ser negativa"],
      max: [20, "La edad no parece real"],
    },
    descripcion: {
      type: String,
      required: true,
    },
    adoptado: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("mascotas", mascotaSchema);
