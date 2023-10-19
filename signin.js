const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const SIGNIN = sequelize.define('userDetails', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  USERNAME: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  EMAIL: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true,

  },
  PASSWORD: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = SIGNIN;