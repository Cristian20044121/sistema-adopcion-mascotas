import dbClient from "../config/dbClient.js";
class mascotasModelo {
  async create(mascota) {
    const colMascota = dbClient.db.collection("mascotas");
    return await colMascota.insertOne(mascota);
  }
}

export default new mascotasModelo();
