const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('registro_ingresos', {
    Id_registro: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Hora_entrada: {
      type: DataTypes.TIME,
      allowNull: false
    },
    Hora_salida: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Motivo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Id_persona: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'personas',
        key: 'Id_persona'
      }
    },
    Tipo: {
      type: DataTypes.ENUM('Vehicular','Peatonal'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'registro_ingresos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_registro" },
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
