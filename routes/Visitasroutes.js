
const express = require("express");
const router = express.Router();
const visitaController = require("../controllers/Visitacontroller");


router.post("/", visitaController.registrarVisita);
router.get("/", visitaController.listarVisitas);
router.get("/persona/:dni", visitaController.buscarVisitasPorDNI);

module.exports = router;
