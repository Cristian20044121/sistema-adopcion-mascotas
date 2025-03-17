import "dotenv/config";
import jsonwebtoken from "jsonwebtoken";

function generarToken(email) {
  return jsonwebtoken.sign({ email }, process.env.JWT_TOKEN_SECRET, {
    expiresIn: "1h",
  });
}
function verificarToken(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "No autorizado" });
  }
  try {
    const dataToken = jsonwebtoken.verify(token, process.env.JWT_TOKEN_SECRET);
    console.log(dataToken.email);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token no valido" }, error);
  }
}

export { generarToken, verificarToken };
