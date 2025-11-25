const express = require("express");  // Importa la librería de Express
const router = express.Router();  // Crea una nueva instancia del enrutador de Express
const referenciasController = require("../controllers/Referenciacontroller");  // Importa el controlador de referencias

// Endpoint para listar todas las marcas
// Ruta: GET /referencias/marcas
// Este endpoint devuelve la lista de todas las marcas disponibles en la base de datos
// Ejemplo de URL: http://localhost:3000/referencias/marcas
router.get("/marcas", referenciasController.listarMarcas);  // Método GET, usa el controlador `listarMarcas`

// Endpoint para listar los modelos de una marca específica
// Ruta: GET /referencias/modelos/:marcaId
// Este endpoint devuelve los modelos de vehículos asociados a una marca específica. El parámetro :marcaId es el ID de la marca.
// Ejemplo de URL: http://localhost:3000/referencias/modelos/1
router.get("/modelos/:marcaId", referenciasController.listarModelosPorMarca);  // Método GET, usa el controlador `listarModelosPorMarca`

// Endpoint para listar todos los colores
// Ruta: GET /referencias/colores
// Este endpoint devuelve la lista de todos los colores disponibles en la base de datos
// Ejemplo de URL: http://localhost:3000/referencias/colores
router.get("/colores", referenciasController.listarColores);  // Método GET, usa el controlador `listarColores`

// Exportamos las rutas para que puedan ser utilizadas en el archivo principal (index.js)
module.exports = router;
