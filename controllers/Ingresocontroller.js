const { Registro_ingresos , Personas} = require("../models");

// Registrar ingreso
exports.registrarIngreso = async (req, res) => {
  try {
    const nuevoIngreso = await Registro_ingresos.create(req.body);
    res.status(201).json(nuevoIngreso);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al registrar ingreso" });
  }
};

// Listar ingresos por persona
exports.listarIngresosPorPersona = async (req, res) => {
  try {
    const { idPersona } = req.params;
    const ingresos = await Registro_ingresos.findAll({
      where: { Id_persona: idPersona }
    });
    res.json(ingresos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al listar ingresos" });
  }
};

// Listar todos los ingresos
exports.listarIngresos = async (req, res) => {
  try {
    const ingresos = await Registro_ingresos.findAll({ include: [Personas] });
    res.json(ingresos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al listar ingresos" });
  }
};

// Buscar ingresos por DNI
exports.buscarIngresosPorDNI = async (req, res) => {
  try {
    const { dni } = req.params;

    const persona = await Personas.findOne({ where: { DNI: dni } });
    if (!persona) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }

    const ingresos = await Registro_ingresos.findAll({
      where: { Id_persona: persona.Id_persona }
    });

    res.json(ingresos);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al buscar ingresos" });
  }
};

