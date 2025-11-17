const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vehiculos', {
    Id_vehiculo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Id_modelo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelos',
        key: 'Id_modelo'
      }
    },
    Color: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'colores',
        key: 'Id_color'
      }
    },
    Ano: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Matricula: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "Matricula"
    },
    Foto: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Id_persona: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'personas',
        key: 'Id_persona'
      }
    }
  }, {
    sequelize,
    tableName: 'vehiculos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_vehiculo" },
        ]
      },
      {
        name: "Matricula",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Matricula" },
        ]
      },
      {
        name: "Id_modelo",
        using: "BTREE",
        fields: [
          { name: "Id_modelo" },
        ]
      },
      {
        name: "Color",
        using: "BTREE",
        fields: [
          { name: "Color" },
        ]
      },
      {
        name: "Id_persona",
        using: "BTREE",
        fields: [
          { name: "Id_persona" },
        ]
      },
    ]
  });
};
