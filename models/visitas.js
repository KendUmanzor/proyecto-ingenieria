const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('visitas', {
    Id_visitas: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Observaciones: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Id_persona: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'personas',
        key: 'Id_persona'
      },
      unique: "visitas_ibfk_1"
    }
  }, {
    sequelize,
    tableName: 'visitas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_visitas" },
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
