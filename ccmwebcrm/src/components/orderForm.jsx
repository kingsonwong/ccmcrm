import React, { Component } from "react";
import Form from "./common/form";
import DropDownLabelPair from "./common/dropdownLabelPair";
import FormPartA from "./formPartA";
import FormPartB from "./formPartB";
import FormPartC from "./formPartC";
import FormPartD from "./formPartD";
import ProductCard from "./common/productCard";
import FormSession from "./common/formSession";

class OrderForm extends Form {
  state = {};
  render() {
    const staffLists = ["Jim", "Eiji", "Ivy", "Shan"];
    const productCategory = ["foo", "lapp", "momo", "dodo"];
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
              <button type="button" class="btn btn-primary">
                Add Product
              </button>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div className="col-sm-2 pr-0 product-item-title">Brand</div>
          <div className="col-sm-4 pr-0 pl-0 product-item-title">
            Product Description
          </div>
          <div className="col-sm-2 pl-0 product-item-title">Model No.</div>
          <input
            className="specialInput"
            type="text"
            placeholder="Price"
            disabled
          />
          <input
            className="specialInput"
            type="text"
            placeholder="Cost"
            disabled
          />
          <input
            className="specialInput"
            type="text"
            placeholder="Discount"
            disabled
          />
          <input
            className="specialInput"
            type="text"
            placeholder="Delivery"
            disabled
          />
        </div>

        <ProductCard
          onChange={this.handleInput}
          productCategory={productCategory}
        />
      </form>
    );
  }
}

export default OrderForm;
