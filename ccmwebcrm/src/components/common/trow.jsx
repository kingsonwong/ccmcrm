import React from "react";

const TableRow = ({ orderObj, handleRowSelected }) => {
  const revenue = orderObj.Revenue + orderObj.one_off_delivery_charge;
  const cost =
    orderObj.Cost + orderObj.Delivery_Cost + orderObj.one_off_delivery_cost;
  const discount = orderObj.Total_Discount + orderObj.one_off_custom_discount;
  return (
    <tr
      id={orderObj.ccm_invoice_no}
      className="orderRow"
      onClick={handleRowSelected}
      data-toggle="modal"
      data-target=".bd-example-modal-lg"
      data-whatever={orderObj}
    >
      <td>{orderObj.ccm_invoice_no}</td>
      <td>{orderObj.case_id}</td>
      <td>{orderObj.record_date}</td>
      <td>{orderObj.staff_name}</td>
      <td>{orderObj.is_complete}</td>
      <td>{revenue}</td>
      <td>{discount}</td>
      <td>{cost}</td>
      <td>{revenue - cost - discount}</td>
      <td>{orderObj.one_off_marketing_coupon_amount}</td>
      <td>{orderObj.net_profit}</td>
    </tr>
  );
};

export default TableRow;
