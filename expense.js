const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Expense = sequelize.define('expense', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  Category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Expense;