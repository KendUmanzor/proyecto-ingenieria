const { Vehiculos, Modelos, Colores, Personas } = require("../models");

// Registrar vehículo
exports.registrarVehiculo = async (req, res) => {
  try {
    const nuevoVehiculo = await Vehiculos.create(req.body);
    res.status(201).json(nuevoVehiculo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al registrar vehículo" });
  }
};

// Listar vehículos de una persona
exports.listarVehiculosPorPersona = async (req, res) => {
  try {
    const { idPersona } = req.params;
    const vehiculos = await Vehiculos.findAll({
      where: { Id_persona: idPersona },
      include: [Modelos, Colores]
    });
    res.json(vehiculos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al listar vehículos" });
  }
};
