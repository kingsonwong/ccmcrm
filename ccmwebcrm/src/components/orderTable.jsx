import React, { Component } from "react";
import Table from "./common/table";
import OrderModal from "./orderModal";

class OrderTable extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-3">
        <div className="control-bar">
          <h1>Orders</h1>
          <button
            type="button"
            class="btn btn-primary addnew"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
          >
            Add New
          </button>
        </div>
        <Table />
        <OrderModal />
      </div>
    );
  }
}

export default OrderTable;
