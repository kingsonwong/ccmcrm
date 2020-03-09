var express = require("express");
var app = express();
const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("../ccmdb.db", err => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the cocomall database.");
});

app.get("/api/getorders", (req, res) => {
  res.send("SELECT * FROM orders");
  let sql = `SELECT * FROM orders`;
  db.all(sql, [], (err, row) => {
    if (err) {
      throw err;
    }
    console.log(row);
    return row;
  });
});

app.get("/api/getorder/:id", function(req, res) {
  res.send(`SELECT * FROM orders WHERE order_id = ${req.params.id}`);
});

app.post("/api/postorder/:id", function(req, res) {
  res.send("SELECT * FROM orders");
});

app.post("/api/putorder/:id", function(req, res) {
  res.send("SELECT * FROM orders");
});

app.post("/api/deleteorder/:id", function(req, res) {
  res.send("SELECT * FROM orders");
});

app.listen(3001, function() {
  console.log("Example app listening on port 3001!");
});
