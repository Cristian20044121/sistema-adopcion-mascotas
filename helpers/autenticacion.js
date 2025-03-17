import "dotenv/config";
import jsonwebtoken from "jsonwebtoken";

function generarToken(email) {
  return jsonwebtoken.sign({ email }, process.env.JWT_TOKEN_SECRET, {
    expiresIn: "1h",
  });
}

export { generarToken };
