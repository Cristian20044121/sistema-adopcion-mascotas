class mascotasController {
  constructor() {}

  async create(req, res) {
    try {
      res.status(201).json({ message: "creado ok" });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  async update(req, res) {
    try {
      res.status(201).json({ message: "actualizado ok" });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  async delete(req, res) {
    try {
      res.status(201).json({ message: "borrado ok" });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  async getAll(req, res) {
    try {
      res.status(201).json({ message: "obtener todos ok" });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  async getOne(req, res) {
    try {
      res.status(201).json({ message: "obtener uno ok" });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
export default new mascotasController();
