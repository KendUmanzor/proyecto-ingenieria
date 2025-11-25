const express = require("express");  // Importa la librería de Express
const router = express.Router();  // Crea una nueva instancia del enrutador de Express
const ingresosController = require("../controllers/Ingresocontroller");  // Importa el controlador de ingresos

//<<<<<<< HEAD
router.post("/", ingresosController.registrarIngreso);  // POST /ingresos
//router.get("/persona/:idPersona", ingresosController.listarIngresosPorPersona);  // GET /ingresos/persona/:idPersona
router.get("/", ingresosController.listarIngresos);
router.get("/dni/:dni", ingresosController.buscarIngresosPorDNI);

// Endpoint para registrar un ingreso
// Ruta: POST /ingresos
// Este endpoint recibe los datos de un nuevo ingreso y lo registra en la base de datos
// Ejemplo de URL: http://localhost:3000/ingresos
router.post("/", ingresosController.registrarIngreso);  // Método POST, usa el controlador `registrarIngreso`

// Endpoint para listar los ingresos de una persona específica
// Ruta: GET /ingresos/persona/:idPersona
// Este endpoint obtiene todos los ingresos relacionados con una persona específica
// El parámetro `:idPersona` es dinámico, y se pasa como parte de la URL
// Ejemplo de URL: http://localhost:3000/ingresos/persona/1
router.get("/persona/:idPersona", ingresosController.listarIngresosPorPersona);  // Método GET, usa el controlador `listarIngresosPorPersona`

// Exportamos el enrutador para que pueda ser utilizado en el archivo principal (index.js)
//>>>>>>> 633d5fe (Valores en la API de acuerdo al front)
module.exports = router;
