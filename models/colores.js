const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('colores', {
    Id_color: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Color: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "Color"
    }
  }, {
    sequelize,
    tableName: 'colores',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_color" },
        ]
      },
      {
        name: "Color",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Color" },
        ]
      },
    ]
  });
};
