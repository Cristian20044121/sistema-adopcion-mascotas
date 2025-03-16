import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";
class mascotasModelo {
  async create(mascota) {
    const colMascota = dbClient.db.collection("mascotas");
    return await colMascota.insertOne(mascota);
  }
  async getAll() {
    const colMascota = dbClient.db.collection("mascotas");
    return await colMascota.find({}).toArray(); // convertimos el cursor a un array
  }
  async getOne(id) {
    const colMascota = dbClient.db.collection("mascotas");
    return await colMascota.findOne({ _id: new ObjectId(id) });
  }
  async update(id, mascota) {
    const colMascota = dbClient.db.collection("mascotas");
    return await colMascota.updateOne(
      { _id: new ObjectId(id) },
      { $set: mascota }
    );
  }
  async delete(id) {
    const colMascota = dbClient.db.collection("mascotas");
    return await colMascota.deleteOne({ _id: new ObjectId(id) });
  }
}

export default new mascotasModelo();
