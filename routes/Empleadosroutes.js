const express = require("express");
const router = express.Router();
const empleadosController = require("../controllers/Empleadocontroller");

router.get("/", empleadosController.listarEmpleados); // GET /empleados
router.get("/num/:numEmpleado", empleadosController.buscarEmpleadoPorNum); // GET /empleados/num/:numEmpleado

module.exports = router;
