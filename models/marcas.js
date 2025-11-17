const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('marcas', {
    Id_marca: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Marca: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "Marca"
    }
  }, {
    sequelize,
    tableName: 'marcas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_marca" },
        ]
      },
      {
        name: "Marca",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Marca" },
        ]
      },
    ]
  });
};
