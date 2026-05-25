const db = require("../database/db");

const login = (req, res) => {
  const { usuario, password } = req.body;

  if (!usuario || !password) {
    return res.status(400).json({ mensaje: "Usuario y contraseña son obligatorios" });
  }

  db.get(
    "SELECT * FROM usuarios WHERE usuario = ? AND password = ?",
    [usuario, password],
    (error, user) => {
      if (error) {
        return res.status(500).json({ mensaje: "Error en el servidor" });
      }

      if (!user) {
        return res.status(401).json({ mensaje: "Credenciales incorrectas" });
      }

      res.json({
        mensaje: "Inicio de sesión exitoso",
        usuario: {
          id: user.id,
          nombre: user.nombre,
          institucion: user.institucion,
          rol: user.rol
        }
      });
    }
  );
};

module.exports = { login };