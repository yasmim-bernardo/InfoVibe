const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Lead = sequelize.define("Lead", {
  nome: DataTypes.STRING,
  email: DataTypes.STRING
});

module.exports = Lead;
