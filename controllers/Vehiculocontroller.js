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
    const { dni } = req.params;

    // Primero buscamos la persona por DNI
    const persona = await Personas.findOne({ where: { DNI: dni } });
    if (!persona) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }

    // Luego buscamos los vehículos de esa persona
    const vehiculos = await Vehiculos.findAll({
      where: { Id_persona: persona.Id_persona },
      include: [
        { model: Modelos, attributes: ["Modelo"] },
        { model: Colores, attributes: ["Color"] }
      ]
    });

    res.json(vehiculos);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al buscar vehículos por DNI" });
  }
};

// Listar todos los vehículos
exports.listarVehiculos = async (req, res) => {
  try {
    const vehiculos = await Vehiculos.findAll({
      include: [Modelos, Colores]
    });
    res.json(vehiculos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al listar vehículos" });
  }
};

// Buscar vehículo por matrícula
exports.buscarVehiculoPorMatricula = async (req, res) => {
  try {
    const { matricula } = req.params;

    const vehiculo = await Vehiculos.findOne({
      where: { Matricula: matricula },
      include: [Modelos, Colores, Personas]
    });

    if (!vehiculo) {
      return res.status(404).json({ message: "Vehículo no encontrado" });
    }

    res.json(vehiculo);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al buscar vehículo" });
  }
};