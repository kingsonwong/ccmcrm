import React, { Component } from "react";
import Table from "./common/table";
import OrderModal from "./orderModal";
import $ from "jquery";
const apiOrders = require("../services/api/orders");

class OrderTable extends Component {
  state = {
    isLoaded: false,
    orders: [],
  };

  componentDidMount() {
    apiOrders.getAllOrders().then((result) => {
      this.setState({
        isLoaded: true,
        orders: result,
      });
    });

    $("#orderModal").on("show.bs.modal", async function (event) {
      var selectedRowId = event.relatedTarget.id;
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      var apidata = await apiOrders.getOrderById(selectedRowId);
      var order = apidata[0];
      console.log(order);
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this);
      modal.find(".invoiceId").val(order.ccm_invoice_id);
    });
  }
  handleRowSelected = (e) => {
    console.log("row selected." + e.currentTarget.id);
  };

  render() {
    const { orders } = this.state;
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
        <Table data={orders} handleRowSelected={this.handleRowSelected} />
        <OrderModal />
      </div>
    );
  }
}

export default OrderTable;
