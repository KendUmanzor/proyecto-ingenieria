const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estudiantes_universidad', {
    Id_estudiante_uni: {
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
    Id_persona_uni: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'personas_universidad',
        key: 'Id_persona_uni'
      },
      unique: "estudiantes_universidad_ibfk_1"
    }
  }, {
    sequelize,
    tableName: 'estudiantes_universidad',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_estudiante_uni" },
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
        name: "Id_persona_uni",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_persona_uni" },
        ]
      },
    ]
  });
};
