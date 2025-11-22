const express = require("express");
const router = express.Router();
const personasController = require("../controllers/Personacontroller");

router.post("/", personasController.registrarPersona);
router.get("/", personasController.listarPersonas);
router.get("/:dni", personasController.buscarPersonaPorId);
router.put("/cambiar/:dni", personasController.actualizarPersona);
module.exports = router;
