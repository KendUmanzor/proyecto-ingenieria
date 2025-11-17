const express = require("express");
const router = express.Router();
const estudiantesController = require("../controllers/Estudiantecontroller");


router.get("/", estudiantesController.listarEstudiantes);
router.get("/num/:numCuenta", estudiantesController.buscarEstudiantePorNumCuenta);

module.exports = router;
