const express = require("express");
const dbQuery = require("../querys/db");
const usersQuery = require("../querys/users.js");
const jwt = require("jsonwebtoken");
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

//Login
router.post("/login", async (req, res) => {
  const query = usersQuery.getSingleUser();
  try {
    const result = await dbQuery.sendQuery(query, [req.body.username]);
    const userPassword = result[0].password;
    if (userPassword === req.body.password) {
      var token = jwt.sign(
        { username: req.body.username, password: req.body.password },
        "privatekey"
      );
      res.send(token);
    } else {
      res.send("password incorrect");
    }
  } catch {
    res.send("username incorrect");
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
