const express = require("express");
const router = express.Router();

const {
  crearVehiculo,
  listarVehiculos,
  obtenerVehiculo
} = require("../controllers/vehiculos.controller");

router.post("/", crearVehiculo);
router.get("/", listarVehiculos);
router.get("/:id", obtenerVehiculo);

module.exports = router;