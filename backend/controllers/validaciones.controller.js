const db = require("../database/db");

const validarTramite = (req, res) => {
  const { tramiteId } = req.params;

  const resultadoPDI = "APROBADO";
  const resultadoSAG = "APROBADO";
  const resultadoFinal = "TRÁMITE APROBADO";
  const observaciones = "Sin observaciones";

  db.run(
    `
    INSERT INTO validaciones 
    (tramite_id, resultado_pdi, resultado_sag, resultado_final, observaciones)
    VALUES (?, ?, ?, ?, ?)
    `,
    [tramiteId, resultadoPDI, resultadoSAG, resultadoFinal, observaciones],
    function (error) {
      if (error) {
        return res.status(500).json({ mensaje: "Error al validar trámite" });
      }

      db.run(
        "UPDATE tramites SET estado = ? WHERE id = ?",
        ["Aprobado", tramiteId]
      );

      res.status(201).json({
        mensaje: "Validación realizada correctamente",
        resultado_pdi: resultadoPDI,
        resultado_sag: resultadoSAG,
        resultado_final: resultadoFinal,
        observaciones
      });
    }
  );
};

const listarValidaciones = (req, res) => {
  db.all("SELECT * FROM validaciones ORDER BY id DESC", [], (error, rows) => {
    if (error) {
      return res.status(500).json({ mensaje: "Error al listar validaciones" });
    }

    res.json(rows);
  });
};

module.exports = {
  validarTramite,
  listarValidaciones
};