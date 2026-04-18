const express = require("express");

const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");

const router = express.Router();

router.get("/stats", async (req, res) => {

  const users = await User.count();
  const products = await Product.count();
  const orders = await Order.count();

  const allOrders = await Order.findAll();

  let revenue = 0;

  allOrders.forEach(order => {
    revenue += order.totalAmount || 0;
  });

  res.json({
    users,
    products,
    orders,
    revenue
  });

});

module.exports = router;