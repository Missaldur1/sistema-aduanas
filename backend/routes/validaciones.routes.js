const express = require("express");
const router = express.Router();

const {
  validarTramite,
  listarValidaciones
} = require("../controllers/validaciones.controller");

router.post("/:tramiteId", validarTramite);
router.get("/", listarValidaciones);

module.exports = router;