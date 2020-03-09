var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("../ccmdb.db", err => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the cocomall database.");
});

app.get("/api/getorders/:page", (req, res) => {
  let sql = `SELECT * FROM orders  LIMIT ${(req.params.page - 1) * 15} , ${15}`;
  db.all(sql, [], (err, row) => {
    if (err) {
      throw err;
    }
    res.send(row);
  });
});

app.get("/api/getorder/:id", function(req, res) {
  res.send(`SELECT * FROM orders WHERE order_id = ${req.params.id}`);
  let sql = `SELECT * FROM orders WHERE order_id = ${req.params.id}`;
  db.all(sql, [], (err, row) => {
    if (err) {
      throw err;
    }
    console.log(row);
    return row;
  });
});

app.get("/api/getordernum", function(req, res) {
  let sql = `SELECT COUNT(*) AS numer_of_order FROM orders`;
  db.all(sql, [], (err, row) => {
    if (err) {
      throw err;
    }
    res.send(row);
  });
});

app.post("/api/postorder", function(req, res) {
  let id = req.body.id;
  res.send("Update id" + id);
  console.log(id);
});

app.put("/api/putorder/:id", function(req, res) {
  res.send("SELECT * FROM orders");
});

app.del("/api/deleteorder/:id", function(req, res) {
  res.send("SELECT * FROM orders");
});

app.listen(3001, function() {
  console.log("Example app listening on port 3001!");
});
