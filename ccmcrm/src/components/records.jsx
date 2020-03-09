import React, { Component } from "react";
import Table from "./common/table";
import Pagination from "./common/pagination";
import { get_orders } from "../services/api";

class Records extends Component {
  state = {
    columnNames: [
      "Invoice ID",
      "Case Id",
      "Record Date",
      "Mark Complete",
      "Net Profit",
      "Cash Receive",
      "Cash Paid",
      "Delivered",
      ""
    ],
    orders: []
  };

  componentDidMount = async () => {
    const { orders } = this.state;
    const new_orders = await get_orders(1);
    console.log(new_orders);

    this.setState({ orders: new_orders });
  };

  render() {
    const { columnNames, orders } = this.state;
    return (
      <div className="right_hand_side">
        <div className="table_area">
          <Table columnNames={columnNames} orders={orders} />
        </div>
        <Pagination />
      </div>
    );
  }
}

export default Records;
