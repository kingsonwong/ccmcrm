import React, { Component } from "react";
import OrderForm from "./orderForm";

class OrderModal extends Component {
  state = {
    formConfig: {
      title: "Order Form",
      closeButton: "Close",
      saveButton: "Save"
    }
  };
  render() {
    return (
      <div
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
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <OrderForm />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                {this.state.formConfig.closeButton}
              </button>
              <button type="button" class="btn btn-primary">
                {this.state.formConfig.saveButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderModal;
