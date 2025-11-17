// controllers/Referenciacontroller.js
const { Marcas, Modelos, Colores } = require("../models");

// Listar todas las marcas
exports.listarMarcas = async (req, res) => {
  try {
    const marcas = await Marcas.findAll();
    res.json(marcas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al listar marcas" });
  }
};

// Listar modelos según la marca
exports.listarModelosPorMarca = async (req, res) => {
  try {
    const { marcaId } = req.params;
    const modelos = await Modelos.findAll({
      where: { Id_marca: marcaId },
      include: [Marcas], // opcional: incluye información de la marca
    });
    res.json(modelos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al listar modelos" });
  }
};

// Listar todos los colores
exports.listarColores = async (req, res) => {
  try {
    const colores = await Colores.findAll();
    res.json(colores);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al listar colores" });
  }
};
