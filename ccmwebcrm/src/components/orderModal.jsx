import React, { Component } from "react";
import OrderForm from "./orderForm";
import Button from "./common/button";

class OrderModal extends Component {
  state = {
    formConfig: {
      title: "Order Form",
      closeButton: "Close",
      saveButton: "Save",
    },
  };
  render() {
    return (
      <div
        id="orderModal"
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myExtraLargeModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-scrollable modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{this.state.formConfig.title}</h5>
              <Button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </Button>
            </div>
            <div class="modal-body">
              <OrderForm />
            </div>

            <div class="modal-footer">
              <Button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                {this.state.formConfig.closeButton}
              </Button>
              <Button type="button" class="btn btn-primary">
                {this.state.formConfig.saveButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderModal;
