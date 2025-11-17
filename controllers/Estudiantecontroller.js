const { Estudiantes, Personas } = require("../models");

exports.listarEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiantes.findAll({ include: [Personas] });
    res.json(estudiantes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al listar estudiantes" });
  }
};

exports.buscarEstudiantePorNumCuenta = async (req, res) => {
  try {
    const estudiante = await Estudiantes.findOne({ 
      where: { Num_cuenta: req.params.numCuenta }, 
      include: [Personas]
    });
    res.json(estudiante);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al buscar estudiante" });
  }
};

