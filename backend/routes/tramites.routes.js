const express = require("express");
const router = express.Router();

const {
  crearTramite,
  listarTramites
} = require("../controllers/tramites.controller");

router.post("/", crearTramite);
router.get("/", listarTramites);

module.exports = router;