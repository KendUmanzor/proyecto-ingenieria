const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empleados', {
    Id_empleados: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Puesto: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Departamento: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Num_empleado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "Num_empleado"
    },
    Id_persona: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'personas',
        key: 'Id_persona'
      },
      unique: "empleados_ibfk_1"
    }
  }, {
    sequelize,
    tableName: 'empleados',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_empleados" },
        ]
      },
      {
        name: "Num_empleado",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Num_empleado" },
        ]
      },
      {
        name: "Id_persona",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_persona" },
        ]
      },
    ]
  });
};
