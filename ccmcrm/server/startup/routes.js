const express = require("express");
const orders = require("../routes/orders");
const auth = require("../routes/auth");
const user = require("../routes/users");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/orders", orders);
  app.use("/api/auth", auth);
  app.use("/api/user", user);
};
