const express = require("express");
const router = express.Router();
const estudiantesController = require("../controllers/Estudiantecontroller");

// Endpoint para listar todos los estudiantes
// Ruta: GET /estudiantes
// Este endpoint obtiene la lista de todos los estudiantes registrados en la base de datos
// Ejemplo de URL: http://localhost:3000/estudiantes
router.get("/", estudiantesController.listarEstudiantes);

// Endpoint para buscar un estudiante por su número de cuenta
// Ruta: GET /estudiantes/num/:numCuenta
// Este endpoint busca un estudiante específico por su número de cuenta y lo devuelve en formato JSON
// El parámetro :numCuenta es un parámetro dinámico en la URL que representa el número de cuenta del estudiante
// Ejemplo de URL: http://localhost:3000/estudiantes/num/20231234133
router.get("/num/:numCuenta", estudiantesController.buscarEstudiantePorNumCuenta);

// Exportamos las rutas para que puedan ser utilizadas en el archivo principal (index.js)
module.exports = router;
