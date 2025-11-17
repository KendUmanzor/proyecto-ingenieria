const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("control_ingresos2", "root", "mysql", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;