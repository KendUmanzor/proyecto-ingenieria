const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('personas', {
    Id_persona: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Apellido: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    DNI: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "DNI"
    },
    Contrasena: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Foto: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'personas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_persona" },
        ]
      },
      {
        name: "DNI",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DNI" },
        ]
      },
    ]
  });
};
