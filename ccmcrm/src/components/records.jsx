import React, { Component } from "react";
import Table from "./common/table";
import Pagination from "./common/pagination";
import { get_orders, get_num_orders } from "../services/api";

class Records extends Component {
  state = {
    columnNames: [
      "Date",
      "Invoice ID",
      "Case Id",
      "Mark Complete",
      "Net Profit",
      "Cash Receive",
      "Cash Paid",
      "Delivered",
      ""
    ],
    orders: [],
    MaxPages: 0,
    ordersPerPage: 15,
    currentPage: 1
  };

  componentDidMount = async () => {
    const { orders, MaxPages, ordersPerPage } = this.state;
    const new_num_order = await get_num_orders();
    const max_pages = Math.ceil(new_num_order / ordersPerPage);
    const new_orders = await get_orders(1);
    console.log(max_pages);
    this.setState({ orders: new_orders, MaxPages: max_pages });
  };

  handlePageChange = i => {
    const { currentPage } = this.state;

    console.log("change", i);
  };

  render() {
    const { columnNames, orders, MaxPages } = this.state;
    return (
      <div className="right_hand_side">
        <div className="table_area">
          <Table columnNames={columnNames} orders={orders} />
        </div>
        <Pagination onPageChange={this.handlePageChange} MaxPages={MaxPages} />
      </div>
    );
  }
}

export default Records;
