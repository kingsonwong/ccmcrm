const express = require("express");
const router = express.Router();
const dbQuery = require("../querys/db");
const usersQuery = require("../querys/users.js");

//Read all orders
router.get("/", async (req, res) => {
  const query = usersQuery.getAllUsers();
  try {
    const result = await dbQuery.getQuery(query);
    console.log(result);
    res.send(result);
  } catch {
    console.log("Error");
  }
});

//Read a single order given an id
router.get("/:id", async (req, res) => {
  const query = usersQuery.getSingleUser();
  try {
    const result = await dbQuery.getQuery(query, req.params.id);
    console.log(result);
    res.send(result);
  } catch {
    console.log("Error");
  }
});

//Delete a single order with id
router.delete("/:id", async (req, res) => {
  const query = usersQuery.updateSingleUser();
  try {
    const result = await dbQuery.getQuery(query, req.params.id);
    res.send("Delete");
  } catch {
    console.log("Error");
  }
});

module.exports = router;
