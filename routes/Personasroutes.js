const express = require("express");
const router = express.Router();
const personasController = require("../controllers/Personacontroller");

// Endpoint para registrar una persona (POST)
router.post("/", personasController.registrarPersona);
// Ruta ejemplo: POST http://localhost:3000/personas
// Este endpoint permite registrar una nueva persona en la base de datos.

// Endpoint para listar todas las personas (GET)
router.get("/", personasController.listarPersonas);
// Ruta ejemplo: GET http://localhost:3000/personas
// Este endpoint devuelve una lista de todas las personas almacenadas en la base de datos.

// Endpoint para buscar una persona por su DNI (GET)
router.get("/:dni", personasController.buscarPersonaPorId);
<<<<<<< HEAD
router.put("/cambiar/:dni", personasController.actualizarPersona);
=======
// Ruta ejemplo: GET http://localhost:3000/personas/0209200300876
// Este endpoint devuelve los datos de una persona en base a su DNI (usando un parámetro dinámico :dni).
// Por ejemplo, puedes usar el DNI "0209200300876" como parámetro para obtener la persona correspondiente.

>>>>>>> 633d5fe (Valores en la API de acuerdo al front)
module.exports = router;
