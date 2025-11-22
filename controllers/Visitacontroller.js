const { Visitas , Personas} = require("../models");

// Registrar visita
exports.registrarVisita = async (req, res) => {
  try {
    const nuevaVisita = await Visitas.create(req.body);
    res.status(201).json(nuevaVisita);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al registrar visita" });
  }
};

// Listar todas las visitas
exports.listarVisitas = async (req, res) => {
  try {
    const visitas = await Visitas.findAll({ include: [Personas] });
    res.json(visitas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al listar visitas" });
  }
};

// Buscar visitas por Id_persona
exports.buscarVisitasPorDNI = async (req, res) => {
  try {
    const { dni } = req.params;

    // Primero buscamos la persona por su DNI
    const persona = await Personas.findOne({ where: { DNI: dni } });
    if (!persona) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }

    // Luego buscamos las visitas de esa persona
    const visitas = await Visitas.findAll({
      where: { Id_persona: persona.Id_persona },
      include: [{
        model: Personas,
        attributes: ["Nombre", "Apellido", "DNI"]
      }]
    });

    res.json(visitas);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al buscar visitas por DNI" });
  }
};