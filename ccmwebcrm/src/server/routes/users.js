const express = require("express");
const dbQuery = require("../querys/db");
const usersQuery = require("../querys/users.js");
const router = express.Router();

//Read all users
router.get("/", async (req, res) => {
  const query = usersQuery.getAllUsers();
  try {
    const result = await dbQuery.sendQuery(query);
    res.send(result);
  } catch {
    console.log("Error");
  }
});

//Read a single user given an id
router.get("/:id", async (req, res) => {
  const query = usersQuery.getSingleUser();
  try {
    const result = await dbQuery.sendQuery(query, [req.params.id]);
    res.send(result);
  } catch {
    console.log("Error");
  }
});

//update a single user password
router.put("/:id", async (req, res) => {
  const query = usersQuery.updateSingleUserPassword();
  try {
    const result = await dbQuery.sendQuery(query, [
      req.headers.password,
      req.params.id,
    ]);
    res.send("Password Update");
  } catch {
    console.log("Error");
  }
});

module.exports = router;
