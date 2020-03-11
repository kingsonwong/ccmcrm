import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import InfiniteScroll from "react-infinite-scroller";

class Table extends Component {
  state = {};
  render() {
    const { columnNames, orders, onRowExpand, onSort } = this.props;

    return (
      <table class="ordertable">
        <thead class="ordertable-head">
          <tr class="ordertable-headrow">
            {columnNames.map(col => {
              return (
                <th scope="col" class="ordertable-headcell" onClick={onSort}>
                  {col.Icon}
                  {col.colname}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody class="ordertable-body">
          {orders.map(order => {
            const product_revenue = order.Revenue;
            const total_discount =
              order.Total_Discount +
              (order.one_off_custom_discount
                ? order.one_off_custom_discount
                : 0);
            const discount_revenue = product_revenue - total_discount;
            const product_cost = order.Cost;
            const delivery_cost =
              order.Delivery_Cost +
              (order.one_off_deliver_cost ? order.one_off_deliver_cost : 0);
            const delivery_charge = order.one_off_deliver_charge
              ? order.one_off_deliver_charge
              : 0;
            const profit_before_coupon =
              discount_revenue - product_cost - delivery_cost + delivery_charge;
            const coupon = order.one_off_marketing_coupon_amount;
            const net_profit = profit_before_coupon - coupon;
            return (
              <React.Fragment>
                <tr
                  class="ordertable-bodyrow"
                  onClick={() => onRowExpand(order)}
                >
                  <td>{order.record_date}</td>
                  <td>{order.staff_name}</td>
                  <td>{order.ccm_invoice_no}</td>
                  <td>{order.case_id}</td>
                  <td>{order.net_profit}</td>
                  <td className="tablecell_addition">
                    <FontAwesomeIcon className="tablerow_icon" icon={faEdit} />
                  </td>
                  <td className="tablecell_addition">
                    <FontAwesomeIcon className="tablerow_icon" icon={faPrint} />
                  </td>
                  <td className="tablecell_addition">
                    <FontAwesomeIcon className="tablerow_icon" icon={faTrash} />
                  </td>
                </tr>
                <tr>
                  <td colspan={columnNames.length}>
                    <div
                      className={
                        order.expandDisplay
                          ? "tablerow_extrainfo_show"
                          : "tablerow_extrainfo_close"
                      }
                    >
                      <div className="tablerow_extra_col1">
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay ? `Invoice Date: ` : ""}
                        </p>
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay ? `Record Date: ` : ""}
                        </p>
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay
                            ? order.remark
                              ? `Remark: `
                              : ""
                            : ""}
                        </p>
                      </div>

                      <div className="tablerow_extra_col2">
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay ? order.ccm_invoice_date : ""}
                        </p>
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay ? order.record_date : ""}
                        </p>
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay
                            ? order.remark
                              ? order.remark
                              : ""
                            : ""}
                        </p>
                      </div>

                      <div className="tablerow_extra_col3">
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay ? `Revenue: ` : ""}
                        </p>
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay
                            ? `Total Product Discount: `
                            : ""}
                        </p>
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay ? `Discount Revenue: ` : ""}
                        </p>
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay ? `Total Cost: ` : ""}
                        </p>
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay ? `Total Delivery Cost: ` : ""}
                        </p>
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay ? `Total Delivery Charge: ` : ""}
                        </p>
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay ? `Profit Before Coupon: ` : ""}
                        </p>
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay ? `Cash Coupon: ` : ""}
                        </p>
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay ? `Net Profit: ` : ""}
                        </p>
                      </div>

                      <div className="tablerow_extra_col4">
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay ? product_revenue : ""}
                        </p>
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay ? total_discount : ""}
                        </p>
                        <p className="tablerow_extrainfo_content breakpointA">
                          {order.expandDisplay ? discount_revenue : ""}
                        </p>
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay ? product_cost : ""}
                        </p>
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay ? delivery_cost : ""}
                        </p>
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay ? delivery_charge : ""}
                        </p>
                        <p className="tablerow_extrainfo_content breakpointB">
                          {order.expandDisplay ? profit_before_coupon : ""}
                        </p>
                        <p className="tablerow_extrainfo_content">
                          {order.expandDisplay ? coupon : ""}
                        </p>
                        <p className="tablerow_extrainfo_content breakpointC">
                          {order.expandDisplay ? net_profit : ""}
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
