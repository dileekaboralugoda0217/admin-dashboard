const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Order = sequelize.define("Order", {
  totalAmount: {
    type: DataTypes.FLOAT
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: "pending"
  }
});

module.exports = Order;