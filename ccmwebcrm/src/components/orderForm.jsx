import React, { Component } from "react";
import Form from "./common/form";
import DropDownLabelPair from "./common/dropdownLabelPair";
import FormPartA from "./formPartA";
import FormPartB from "./formPartB";
import FormPartC from "./formPartC";
import FormPartD from "./formPartD";
import ProductCard from "./common/productCard";
import ProductCardColumn from "./common/productCardColumn";
import FormSession from "./common/formSession";

class OrderForm extends Form {
  state = {
    order: {
      orderInfo: [],
      basicInfo: [],
      productLists: []
    }
  };
  handleInput = e => {
    let order = { ...this.state.order };

    let selectedProduct = order.productLists[e.currentTarget.id];
    selectedProduct[e.currentTarget.name] = e.currentTarget.value;

    this.setState({ order });
  };

  handleAddProduct = e => {
    let order = { ...this.state.order };
    let obj = {
      id: order.productLists.length,
      brandName: "",
      productDescription: "",
      modelNo: "",
      unitprice: 0,
      unitcost: 0,
      discount: 0,
      deliveryCost: 0,
      qty: 0
    };
    order.productLists.push(obj);
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
          <FormPartA onChange={this.handleInput} />
          <FormPartB onChange={this.handleInput} />
        </div>
        <FormSession title="Basic Information" />
        <div class="row">
          <FormPartC onChange={this.handleInput} />
        </div>
        <FormSession title="Products" />
        <div class="row">
          <div className="col">
            <div className="product-control">
              <button
                type="button"
                class="btn btn-primary"
                onClick={this.handleAddProduct}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
        <ProductCardColumn />
        {order.productLists.map(product => {
          return (
            <ProductCard cardid={product.id} onChange={this.handleInput} />
          );
        })}
      </form>
    );
  }
}

export default OrderForm;
