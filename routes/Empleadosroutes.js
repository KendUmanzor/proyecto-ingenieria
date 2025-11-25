const express = require("express");
const router = express.Router();
const empleadosController = require("../controllers/Empleadocontroller");

// Endpoint para listar todos los empleados
// Ruta: GET /empleados
// Este endpoint obtiene la lista de todos los empleados registrados en la base de datos
// Ejemplo de URL: http://localhost:3000/empleados
router.get("/", empleadosController.listarEmpleados);

// Endpoint para buscar un empleado por su número de empleado
// Ruta: GET /empleados/num/:numEmpleado
// Este endpoint busca un empleado específico por su número de empleado y lo devuelve en formato JSON
// El parámetro :numEmpleado es un parámetro dinámico en la URL que representa el número de empleado
// Ejemplo de URL: http://localhost:3000/empleados/num/1003
router.get("/num/:numEmpleado", empleadosController.buscarEmpleadoPorNum);

// Exportamos las rutas para ser utilizadas en el archivo principal (index.js)
module.exports = router;
