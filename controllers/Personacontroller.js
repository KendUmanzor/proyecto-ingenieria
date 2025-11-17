const { Personas } = require("../models");

exports.registrarPersona = async (req, res) => {

  try {
    const nuevaPersona = await Personas.create(req.body);
    res.status(201).json(nuevaPersona);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al registrar persona" });
  }
};

exports.listarPersonas = async (req, res) => {
  try {
    const personas = await Personas.findAll();
    res.json(personas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al listar personas" });
  }
};

exports.buscarPersonaPorId = async (req, res) => {
  try {
    const persona = await Personas.findOne({ where: { DNI: req.params.dni } });
    res.json(persona);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al buscar persona" });
  }
};
