const express = require("express");
const router = express.Router();
const ingresosController = require("../controllers/Ingresocontroller");

router.post("/", ingresosController.registrarIngreso);  // POST /ingresos
router.get("/persona/:idPersona", ingresosController.listarIngresosPorPersona);  // GET /ingresos/persona/:idPersona

module.exports = router;
