const express = require("express");
const dbQuery = require("../querys/db");
const ordersQuery = require("../querys/orders.js");
const router = express.Router();

//Read all orders
router.get("/", async (req, res) => {
  const query = ordersQuery.getAllOrders();
  try {
    const result = await dbQuery.sendQuery(query);
    console.log(result);
    res.send(result);
  } catch {
    console.log("Error");
  }
});

//Read a single order given an id
router.get("/:id", async (req, res) => {
  const query = ordersQuery.getSingleOrders();
  try {
    const result = await dbQuery.sendQuery(query, [req.params.id]);
    console.log(result);
    res.send(result);
  } catch {
    console.log("Error");
  }
});

//Post a single order with id
router.post("/", async (req, res) => {
  const query = ordersQuery.postSingleOrder(req.body);
  try {
    const result = await dbQuery.sendQuery(query, Object.values(req.body));
    res.send("Create new order Success.");
  } catch (ex) {
    console.log(ex);
  }
});

//Update a single order with id
router.put("/:id", async (req, res) => {
  const query = ordersQuery.updateSingleOrder(req.params.id);
  try {
    const result = await dbQuery.sendQuery(query, Object.values(req.body));
    res.send("Update Success.");
  } catch (ex) {
    console.log(ex);
  }
});

//Delete a single order with id
router.delete("/:id", async (req, res) => {
  const query = ordersQuery.deleteSingleOrder();
  try {
    const result = await dbQuery.sendQuery(query, [req.params.id]);
    res.send("Delete order Success");
  } catch {
    console.log("Error");
  }
});

module.exports = router;
