const express = require("express");  // Importa la librería de Express
const router = express.Router();  // Crea una nueva instancia del enrutador de Express
const vehiculosController = require("../controllers/Vehiculocontroller");  // Importa el controlador de vehículos

<<<<<<< HEAD
router.post("/", vehiculosController.registrarVehiculo);  // POST /vehiculos
router.get("/persona/:dni", vehiculosController.listarVehiculosPorPersona);  // GET /vehiculos/persona/:idPersona
router.get("/vehiculos", vehiculosController.listarVehiculos);
router.get("/vehiculos/matricula/:matricula", vehiculosController.buscarVehiculoPorMatricula);
=======
// Endpoint para registrar un vehículo
// Ruta: POST /vehiculos
// Este endpoint recibe los datos de un nuevo vehículo y lo registra en la base de datos
// Ejemplo de URL: http://localhost:3000/vehiculos
router.post("/", vehiculosController.registrarVehiculo);  // Método POST, usa el controlador `registrarVehiculo`

// Endpoint para listar los vehículos de una persona específica
// Ruta: GET /vehiculos/persona/:idPersona
// Este endpoint obtiene todos los vehículos asociados a una persona específica
// El parámetro :idPersona es el ID de la persona cuyo vehículos deseas obtener
// Ejemplo de URL: http://localhost:3000/vehiculos/persona/1
router.get("/persona/:idPersona", vehiculosController.listarVehiculosPorPersona);  // Método GET, usa el controlador `listarVehiculosPorPersona`

// Exportamos las rutas para que puedan ser utilizadas en el archivo principal (index.js)
>>>>>>> 633d5fe (Valores en la API de acuerdo al front)
module.exports = router;
