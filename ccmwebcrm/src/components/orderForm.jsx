import React, { Component } from "react";
import Form from "./common/form";
import DropDownLabelPair from "./common/dropdownLabelPair";
import Button from "./common/button";
import FormPartA from "./formPartA";
import FormPartB from "./formPartB";
import FormPartC from "./formPartC";
import FormPartD from "./formPartD";
import ProductCard from "./common/productCard";
import ProductCardColumn from "./common/productCardColumn";
import FormSession from "./common/formSession";

class OrderForm extends Component {
  state = {
    order: {
      orderInfo: [],
      basicInfo: [],
      productLists: [],
    },
  };
  handleInput = (e) => {
    let order = { ...this.state.order };
    const index = e.currentTarget.id - 1;
    let selectedProduct = order.productLists[index];
    selectedProduct[e.currentTarget.name] = e.currentTarget.value;

    this.setState({ order });
  };

  handleAddProduct = (e) => {
    let order = { ...this.state.order };
    let obj = {
      brandName: "",
      productDescription: "",
      modelNo: "",
      unitprice: 0,
      unitcost: 0,
      discount: 0,
      deliveryCost: 0,
      qty: 0,
    };
    order.productLists.push(obj);
    this.setState({ order });
  };

  handleDeleteProduct = (e) => {
    let order = { ...this.state.order };
    const index = e.currentTarget.id - 1;
    console.log(index + " index was deleted.");
    order.productLists.splice(index, 1);
    this.setState({ order });
  };

  render() {
    const staffLists = ["Jim", "Eiji", "Ivy", "Shan"];
    const productCategory = ["foo", "lapp", "momo", "dodo"];
    let order = { ...this.state.order };
    return (
      <form class="container mt-3">
        <DropDownLabelPair
          options={staffLists}
          labelWidth="1"
          inputWidth="4"
          labelName="Staff"
          id="staff"
        />
        <FormSession title="Order Information" />
        <div class="row">
          <FormPartA order={order} onChange={this.handleInput} />
          <FormPartB order={order} onChange={this.handleInput} />
        </div>
        <FormSession title="Basic Information" />
        <div class="row">
          <FormPartC order={order} onChange={this.handleInput} />
        </div>
        <FormSession title="Products">
          <span class="badge badge-secondary ml-2 mr-2">
            {order.productLists.length}
          </span>
        </FormSession>
        <FormPartD
          addProduct={this.handleAddProduct}
          order={order}
          handleInput={this.handleInput}
          deleteProduct={this.deleteProduct}
        />
      </form>
    );
  }
}

export default OrderForm;
