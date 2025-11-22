const { Empleados ,Personas} = require("../models");

// Listar empleados
exports.listarEmpleados = async (req, res) => {
  try {
    const empleados = await Empleados.findAll({ include: [Personas] });
    res.json(empleados);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al listar empleados" });
  }
};

// Buscar empleado por número de empleado
exports.buscarEmpleadoPorNum = async (req, res) => {
  try {
    const { numEmpleado } = req.params;
    const empleado = await Empleados.findOne({
      where: { Num_empleado: numEmpleado },
      include: [Personas]
    });
    if (!empleado) return res.status(404).json({ message: "Empleado no encontrado" });
    res.json(empleado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al buscar empleado" });
  }
};
