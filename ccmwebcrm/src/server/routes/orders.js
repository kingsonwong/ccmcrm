const express = require("express");
const router = express.Router();

const dbQuery = require("../querys/db");
const ordersQuery = require("../querys/orders.js");

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
  const query = ordersQuery.getSingleOrders(req.params.id);
  try {
    const result = await dbQuery.sendQuery(query);
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
    const result = await dbQuery.insertData(query, req.body);
    res.send("Success.");
  } catch (ex) {
    console.log(ex);
  }
});

//Delete a single order with id
router.delete("/:id", async (req, res) => {
  const query = ordersQuery.deleteSingleOrder();
  try {
    const result = await dbQuery.deleteQuery(query, req.params.id);
    res.send("Delete");
  } catch {
    console.log("Error");
  }
});

module.exports = router;
