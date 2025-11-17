const express = require("express");
const router = express.Router();
const vehiculosController = require("../controllers/Vehiculocontroller");

router.post("/", vehiculosController.registrarVehiculo);  // POST /vehiculos
router.get("/persona/:idPersona", vehiculosController.listarVehiculosPorPersona);  // GET /vehiculos/persona/:idPersona

module.exports = router;
