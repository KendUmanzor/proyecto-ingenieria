var DataTypes = require("sequelize").DataTypes;
var _colores = require("./colores");
var _empleados = require("./empleados");
var _empleados_universidad = require("./empleados_universidad");
var _estudiantes = require("./estudiantes");
var _estudiantes_universidad = require("./estudiantes_universidad");
var _marcas = require("./marcas");
var _modelos = require("./modelos");
var _personas = require("./personas");
var _personas_universidad = require("./personas_universidad");
var _registro_ingresos = require("./registro_ingresos");
var _vehiculos = require("./vehiculos");
var _visitas = require("./visitas");

function initModels(sequelize) {
  var colores = _colores(sequelize, DataTypes);
  var empleados = _empleados(sequelize, DataTypes);
  var empleados_universidad = _empleados_universidad(sequelize, DataTypes);
  var estudiantes = _estudiantes(sequelize, DataTypes);
  var estudiantes_universidad = _estudiantes_universidad(sequelize, DataTypes);
  var marcas = _marcas(sequelize, DataTypes);
  var modelos = _modelos(sequelize, DataTypes);
  var personas = _personas(sequelize, DataTypes);
  var personas_universidad = _personas_universidad(sequelize, DataTypes);
  var registro_ingresos = _registro_ingresos(sequelize, DataTypes);
  var vehiculos = _vehiculos(sequelize, DataTypes);
  var visitas = _visitas(sequelize, DataTypes);

  vehiculos.belongsTo(colores, { as: "Color_colore", foreignKey: "Color"});
  colores.hasMany(vehiculos, { as: "vehiculos", foreignKey: "Color"});
  modelos.belongsTo(marcas, { as: "Id_marca_marca", foreignKey: "Id_marca"});
  marcas.hasMany(modelos, { as: "modelos", foreignKey: "Id_marca"});
  vehiculos.belongsTo(modelos, { as: "Id_modelo_modelo", foreignKey: "Id_modelo"});
  modelos.hasMany(vehiculos, { as: "vehiculos", foreignKey: "Id_modelo"});
  empleados.belongsTo(personas, { as: "Id_persona_persona", foreignKey: "Id_persona"});
  personas.hasOne(empleados, { as: "empleado", foreignKey: "Id_persona"});
  estudiantes.belongsTo(personas, { as: "Id_persona_persona", foreignKey: "Id_persona"});
  personas.hasOne(estudiantes, { as: "estudiante", foreignKey: "Id_persona"});
  registro_ingresos.belongsTo(personas, { as: "Id_persona_persona", foreignKey: "Id_persona"});
  personas.hasMany(registro_ingresos, { as: "registro_ingresos", foreignKey: "Id_persona"});
  vehiculos.belongsTo(personas, { as: "Id_persona_persona", foreignKey: "Id_persona"});
  personas.hasMany(vehiculos, { as: "vehiculos", foreignKey: "Id_persona"});
  visitas.belongsTo(personas, { as: "Id_persona_persona", foreignKey: "Id_persona"});
  personas.hasOne(visitas, { as: "visitum", foreignKey: "Id_persona"});
  empleados_universidad.belongsTo(personas_universidad, { as: "Id_persona_uni_personas_universidad", foreignKey: "Id_persona_uni"});
  personas_universidad.hasOne(empleados_universidad, { as: "empleados_universidad", foreignKey: "Id_persona_uni"});
  estudiantes_universidad.belongsTo(personas_universidad, { as: "Id_persona_uni_personas_universidad", foreignKey: "Id_persona_uni"});
  personas_universidad.hasOne(estudiantes_universidad, { as: "estudiantes_universidad", foreignKey: "Id_persona_uni"});

  return {
    colores,
    empleados,
    empleados_universidad,
    estudiantes,
    estudiantes_universidad,
    marcas,
    modelos,
    personas,
    personas_universidad,
    registro_ingresos,
    vehiculos,
    visitas,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
