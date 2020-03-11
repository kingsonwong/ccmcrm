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

app.get("/api/getorders/:seq/:col", (req, res) => {
  let sql = `SELECT *, Revenue - Total_Discount - ifnull(one_off_custom_discount,0) - Cost - Delivery_Cost
  - ifnull(one_off_delivery_cost,0) + ifnull(one_off_delivery_charge,0) - ifnull(one_off_marketing_coupon_amount,0) AS net_profit
 FROM
   (
     SELECT * from orders o
       JOIN (
         SELECT ccm_invoice_no,
          ifnull(unit_price,0)*qty AS Revenue,
          ifnull(unit_cost,0)*qty AS Cost,
          ifnull(unit_delivery_cost,0)*qty AS Delivery_Cost,
          ifnull(unit_discount,0)*qty AS Total_Discount,
          (ifnull(unit_price,0)-ifnull(unit_cost,0)-ifnull(unit_discount,0)-ifnull(unit_delivery_cost,0))*qty AS profit 
         FROM orders_products 
         GROUP BY ccm_invoice_no
       ) op
     ON o.ccm_invoice_no = op.ccm_invoice_no
       JOIN staffs s
     ON o.staff_id = s.staff_id
   ) 
  ORDER BY ${req.params.col} ${req.params.seq}`; //  LIMIT ${(req.params.page - 1) * 15} , ${15}`;
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
