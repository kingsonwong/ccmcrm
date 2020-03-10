import React, { Component } from "react";
import Table from "./common/table";
import Pagination from "./common/pagination";
import { get_orders, get_num_orders } from "../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faFileInvoice,
  faBriefcase,
  faDollarSign,
  faUserFriends,
  faStickyNote
} from "@fortawesome/free-solid-svg-icons";

class Records extends Component {
  state = {
    columnNames: [
      {
        colname: "Date",
        Icon: <FontAwesomeIcon className="tableicon" icon={faCalendarDay} />
      },
      {
        colname: "Staff",
        Icon: <FontAwesomeIcon className="tableicon" icon={faUserFriends} />
      },
      {
        colname: "Invoice",
        Icon: <FontAwesomeIcon className="tableicon" icon={faFileInvoice} />
      },
      {
        colname: "Case ID",
        Icon: <FontAwesomeIcon className="tableicon" icon={faBriefcase} />
      },
      {
        colname: "Net Profit",
        Icon: <FontAwesomeIcon className="tableicon" icon={faDollarSign} />
      }
    ],
    orders: [],
    MaxPages: 0,
    ordersPerPage: 15,
    currentPage: 1,
    lastExpandIndex: -1
  };

  componentDidMount = async () => {
    const { orders, MaxPages, ordersPerPage } = this.state;
    const new_num_order = await get_num_orders();
    const max_pages = Math.ceil(new_num_order / ordersPerPage);
    let new_orders = await get_orders(1);
    new_orders = new_orders.map(i => {
      return { ...i, expandDisplay: false };
    });
    console.log(new_orders);
    this.setState({ orders: new_orders, MaxPages: max_pages });
  };

  handleRowExpand = order => {
    let { orders, lastExpandIndex } = this.state;
    var index = orders.indexOf(order);
    orders[index].expandDisplay = !orders[index].expandDisplay;
    if (index !== lastExpandIndex && !lastExpandIndex) {
      console.log("logic execute");
      orders[lastExpandIndex].expandDisplay = false;
      lastExpandIndex = index;
    }
    this.setState({ orders, lastExpandIndex });
  };

  handlePageChange = i => {
    const { currentPage } = this.state;

    console.log("change", i);
  };

  render() {
    const { columnNames, orders, MaxPages } = this.state;
    return (
      <div className="right_hand_side">
        <button className="filter_button">+ Add Filter</button>
        <hr />
        <div className="control_bar">
          <p className="display_count">324 orders</p>
        </div>

        <hr />

        <div className="table_area">
          <Table
            columnNames={columnNames}
            orders={orders}
            onRowExpand={this.handleRowExpand}
          />
        </div>
        <Pagination onPageChange={this.handlePageChange} MaxPages={MaxPages} />
      </div>
    );
  }
}

export default Records;
