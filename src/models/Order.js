const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Order = sequelize.define("Order", {
  totalPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: "pending"
  }
});

module.exports = Order;