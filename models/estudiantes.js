const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estudiantes', {
    Id_estudiante: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Carrera: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Facultad: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Num_cuenta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "Num_cuenta"
    },
    Id_persona: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'personas',
        key: 'Id_persona'
      },
      unique: "estudiantes_ibfk_1"
    }
  }, {
    sequelize,
    tableName: 'estudiantes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_estudiante" },
        ]
      },
      {
        name: "Num_cuenta",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Num_cuenta" },
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
