const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("control_ingresos2", "root", "Litzy2004.", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;