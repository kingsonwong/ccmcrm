import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

class Table extends Component {
  state = {};
  render() {
    const { columnNames, orders } = this.props;
    return (
      <table class="table">
        <thead>
          <tr>
            {columnNames.map(colname => {
              return <th scope="col">{colname}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {orders.map(order => {
            return (
              <tr>
                <td>{order.record_date}</td>
                <td>{order.ccm_invoice_no}</td>
                <td>{order.case_id}</td>
                <td>{order.is_complete}</td>
                <td>XXX</td>
                <td>{order.cash_received_date}</td>
                <td>{order.cash_paid_date}</td>
                <td>{order.delivered_date}</td>
                <td>
                  <FontAwesomeIcon className="print_icon" icon={faPrint} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
