const express = require("express");
const router = express.Router();
const vehiculosController = require("../controllers/Vehiculocontroller");

router.post("/", vehiculosController.registrarVehiculo);  // POST /vehiculos
router.get("/persona/:dni", vehiculosController.listarVehiculosPorPersona);  // GET /vehiculos/persona/:idPersona
router.get("/vehiculos", vehiculosController.listarVehiculos);
router.get("/vehiculos/matricula/:matricula", vehiculosController.buscarVehiculoPorMatricula);
module.exports = router;
