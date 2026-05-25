const db = require("../database/db");

const crearVehiculo = (req, res) => {
  const {
    tipo,
    patente,
    pais_origen,
    marca,
    modelo,
    anio,
    color,
    chasis,
    motor,
    conductor_nombre,
    conductor_nacionalidad,
    conductor_documento,
    documento_tipo,
    documento_numero,
    vencimiento
  } = req.body;

  const sql = `
    INSERT INTO vehiculos (
      tipo, patente, pais_origen, marca, modelo, anio, color, chasis, motor,
      conductor_nombre, conductor_nacionalidad, conductor_documento,
      documento_tipo, documento_numero, vencimiento
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(
    sql,
    [
      tipo,
      patente,
      pais_origen,
      marca,
      modelo,
      anio,
      color,
      chasis,
      motor,
      conductor_nombre,
      conductor_nacionalidad,
      conductor_documento,
      documento_tipo,
      documento_numero,
      vencimiento
    ],
    function (error) {
      if (error) {
        return res.status(500).json({ mensaje: "Error al registrar vehículo", error });
      }

      res.status(201).json({
        mensaje: "Vehículo registrado correctamente",
        id: this.lastID
      });
    }
  );
};

const listarVehiculos = (req, res) => {
  db.all("SELECT * FROM vehiculos ORDER BY id DESC", [], (error, rows) => {
    if (error) {
      return res.status(500).json({ mensaje: "Error al listar vehículos" });
    }

    res.json(rows);
  });
};

const obtenerVehiculo = (req, res) => {
  const { id } = req.params;

  db.get("SELECT * FROM vehiculos WHERE id = ?", [id], (error, row) => {
    if (error) {
      return res.status(500).json({ mensaje: "Error al buscar vehículo" });
    }

    if (!row) {
      return res.status(404).json({ mensaje: "Vehículo no encontrado" });
    }

    res.json(row);
  });
};

module.exports = {
  crearVehiculo,
  listarVehiculos,
  obtenerVehiculo
};