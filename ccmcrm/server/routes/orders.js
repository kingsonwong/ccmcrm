const express = require("express");
const router = express.Router();
const db = require("../startup/db");
const query = require("../common/query");

router.get("/:seq/:col", async (req, res) => {
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
  try {
    const result = await query(sql);
    res.send(result);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.get("/:id", async (req, res) => {
  let sql = `SELECT * FROM orders WHERE ccm_invoice_no = "${req.params.id}"`;
  try {
    const result = await query(sql);
    res.send(result);
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = router;
