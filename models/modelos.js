const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modelos', {
    Id_modelo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Modelo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "Modelo"
    },
    Id_marca: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'marcas',
        key: 'Id_marca'
      }
    }
  }, {
    sequelize,
    tableName: 'modelos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_modelo" },
        ]
      },
      {
        name: "Modelo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Modelo" },
        ]
      },
      {
        name: "Id_marca",
        using: "BTREE",
        fields: [
          { name: "Id_marca" },
        ]
      },
    ]
  });
};
