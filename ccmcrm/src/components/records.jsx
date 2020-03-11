import React, { Component } from "react";
import Table from "./common/table";
import Filter from "./common/filter";
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
        id: "record_date",
        colname: "Date",
        Icon: <FontAwesomeIcon className="tableicon" icon={faCalendarDay} />
      },
      {
        id: "staff_name",
        colname: "Staff",
        Icon: <FontAwesomeIcon className="tableicon" icon={faUserFriends} />
      },
      {
        id: "ccm_invoice_no",
        colname: "Invoice",
        Icon: <FontAwesomeIcon className="tableicon" icon={faFileInvoice} />
      },
      {
        id: "case_id",
        colname: "Case ID",
        Icon: <FontAwesomeIcon className="tableicon" icon={faBriefcase} />
      },
      {
        id: "net_profit",
        colname: "Net Profit",
        Icon: <FontAwesomeIcon className="tableicon" icon={faDollarSign} />
      },
      { colname: "Edit", Icon: "" },
      { colname: "Print", Icon: "" },
      { colname: "Delete", Icon: "" }
    ],
    orders: [],
    MaxPages: 0,
    ordersPerPage: 15,
    currentPage: 1,
    lastExpandIndex: -1,
    currentSortColumn: "record_date",
    currentSortSeq: "DESC"
  };

  componentDidMount = async () => {
    const {
      orders,
      MaxPages,
      ordersPerPage,
      currentSortColumn,
      currentSortSeq
    } = this.state;
    const new_num_order = await get_num_orders();
    const max_pages = Math.ceil(new_num_order / ordersPerPage);
    let new_orders = await get_orders(currentSortSeq, currentSortColumn);
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
      orders[lastExpandIndex].expandDisplay = false;
      lastExpandIndex = index;
    }
    this.setState({ orders, lastExpandIndex });
  };

  handleRowSort = async e => {
    let { columnNames, currentSortColumn, currentSortSeq } = this.state;
    if (
      e.currentTarget.innerText == "Edit" ||
      e.currentTarget.innerText == "Print" ||
      e.currentTarget.innerText == "Delete"
    ) {
      return;
    }
    let index = columnNames
      .map(col => col.colname)
      .indexOf(e.currentTarget.innerText);
    let selected_column_id = columnNames[index].id;
    if (currentSortColumn === selected_column_id) {
      if (currentSortSeq == "DESC") {
        currentSortSeq = "ASC";
      } else {
        currentSortSeq = "DESC";
      }
    } else {
      currentSortSeq = "DESC";
    }
    currentSortColumn = selected_column_id;

    let new_orders = await get_orders(currentSortSeq, selected_column_id);
    this.setState({
      orders: new_orders,
      currentSortColumn: currentSortColumn,
      currentSortSeq: currentSortSeq
    });
  };

  render() {
    const {
      columnNames,
      orders,
      currentSortColumn,
      currentSortSeq
    } = this.state;
    return (
      <div className="right_hand_side">
        <Filter />

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
            onSort={this.handleRowSort}
          />
        </div>
      </div>
    );
  }
}

export default Records;
