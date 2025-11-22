const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("control_ingresos2", "root", "mysql", {
  host: "localhost",
  dialect: "mysql",
});

sequelize.authenticate()
  .then(() => console.log("Conectado a MySQL"))
  .catch(err => console.error("Error al conectar:", err));


// Importar modelos
const Personas = require("./personas")(sequelize, DataTypes);
const Estudiantes = require("./estudiantes")(sequelize, DataTypes);
const Empleados = require("./empleados")(sequelize, DataTypes);
const Registro_ingresos = require("./registro_ingresos")(sequelize, DataTypes);
const Vehiculos = require("./vehiculos")(sequelize, DataTypes);
const Marcas = require("./marcas")(sequelize, DataTypes);
const Modelos = require("./modelos")(sequelize, DataTypes);
const Colores = require("./colores")(sequelize, DataTypes);
const Visitas = require("./visitas")(sequelize, DataTypes);

// Definir relaciones
Estudiantes.belongsTo(Personas, { foreignKey: "Id_persona" });
Empleados.belongsTo(Personas, { foreignKey: "Id_persona" });
Registro_ingresos.belongsTo(Personas, { foreignKey: "Id_persona" });
Vehiculos.belongsTo(Personas, { foreignKey: "Id_persona" });
Vehiculos.belongsTo(Modelos, { foreignKey: "Id_modelo" });
Vehiculos.belongsTo(Colores, { foreignKey: "Color" });
Modelos.belongsTo(Marcas, { foreignKey: "Id_marca" });
Visitas.belongsTo(Personas, { foreignKey: "Id_persona" });
Personas.hasOne(Empleados, { foreignKey: 'Id_persona' });
// Exportar modelos y conexión
module.exports = {
  sequelize,
  Personas,
  Estudiantes,
  Empleados,
  Registro_ingresos,
  Vehiculos,
  Marcas,
  Modelos,
  Colores,
  Visitas
};
