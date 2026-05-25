const db = require("../database/db");

const crearTramite = (req, res) => {
  const { vehiculo_id, observaciones } = req.body;

  db.run(
    "INSERT INTO tramites (vehiculo_id, estado, observaciones) VALUES (?, ?, ?)",
    [vehiculo_id, "Pendiente", observaciones || ""],
    function (error) {
      if (error) {
        return res.status(500).json({ mensaje: "Error al crear trámite" });
      }

      res.status(201).json({
        mensaje: "Trámite creado correctamente",
        id: this.lastID
      });
    }
  );
};

const listarTramites = (req, res) => {
  const sql = `
    SELECT 
      t.id,
      t.estado,
      t.fecha,
      t.observaciones,
      v.patente,
      v.conductor_nombre
    FROM tramites t
    LEFT JOIN vehiculos v ON v.id = t.vehiculo_id
    ORDER BY t.id DESC
  `;

  db.all(sql, [], (error, rows) => {
    if (error) {
      return res.status(500).json({ mensaje: "Error al listar trámites" });
    }

    res.json(rows);
  });
};

module.exports = {
  crearTramite,
  listarTramites
};