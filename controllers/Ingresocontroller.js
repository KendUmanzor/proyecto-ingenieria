const { Registro_ingresos } = require("../models");

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
