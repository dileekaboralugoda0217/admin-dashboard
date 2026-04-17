const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

  description: {
    type: DataTypes.TEXT
  },

  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },

  image: {
    type: DataTypes.STRING
  }
});

module.exports = Product;