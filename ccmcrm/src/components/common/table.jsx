import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

class Table extends Component {
  state = {};
  render() {
    const { columnNames, orders, onRowExpand } = this.props;
    return (
      <table class="ordertable">
        <thead class="ordertable-head">
          <tr class="ordertable-headrow">
            {columnNames.map(col => {
              return (
                <th scope="col" class="ordertable-headcell">
                  {col.Icon}
                  {col.colname}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody class="ordertable-body">
          {orders.map(order => {
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
                  <td>$1,000</td>
                </tr>
                <div
                  className={
                    order.expandDisplay
                      ? "tablerow_extrainfo_show"
                      : "tablerow_extrainfo"
                  }
                ></div>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
