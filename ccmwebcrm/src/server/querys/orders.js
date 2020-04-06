exports.getAllOrders = function getAllOrders() {
  return `
  SELECT *, Revenue - Total_Discount - ifnull(one_off_custom_discount,0) - Cost - Delivery_Cost
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
  `;
};

exports.getSingleOrders = function getSingleOrders(ccmInvoiceNo) {
  return `
  SELECT *, Revenue - Total_Discount - ifnull(one_off_custom_discount,0) - Cost - Delivery_Cost
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
   ) WHERE ccm_invoice_no = "${ccmInvoiceNo}"
  `;
};

exports.postSingleOrder = function postSingleOrder(orderObj) {
  const row = Object.values(orderObj)
    .map((obj) => {
      return "?";
    })
    .join(",");
  return `
  INSERT INTO orders 
  (ccm_invoice_no, record_date, ccm_invoice_date, remark, is_complete, cash_received_date,
    cash_paid_date, delivered_date, staff_id, case_id, supplier_invoice_ref_no,
    supplier_purchase_order_ref_no, supplier_id, customer_id, one_off_marketing_coupon_amount,
    one_off_delivery_charge, one_off_delivery_cost, one_off_custom_discount)
   VALUES (${row})
  `;
};

exports.deleteSingleOrder = function deleteSingleOrder() {
  return `DELETE from orders WHERE ccm_invoice_no = ?`;
};
