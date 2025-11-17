const express = require("express");
const router = express.Router();
const referenciasController = require("../controllers/Referenciacontroller");

router.get("/marcas", referenciasController.listarMarcas);
router.get("/modelos/:marcaId", referenciasController.listarModelosPorMarca);
router.get("/colores", referenciasController.listarColores);

module.exports = router;
