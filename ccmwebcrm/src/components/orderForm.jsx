import React, { Component } from "react";
import Form from "./common/form";
import DropDown from "./common/dropdown";
import FormPartA from "./formPartA";
import FormPartB from "./formPartB";
import FormPartC from "./formPartC";
import FormPartD from "./formPartD";

class OrderForm extends Form {
  state = {};
  render() {
    const staffLists = ["Jim", "Eiji", "Ivy", "Shan"];
    return (
      <form class="container mt-3">
        <DropDown
          options={staffLists}
          labelWidth="1"
          inputWidth="4"
          labelName="Staff"
          id="staff"
        />
        <h1 class="mb-3">Order Information</h1>
        <hr />
        <div class="row">
          <FormPartA onChange={this.handleInput} />
          <FormPartB onChange={this.handleInput} />
        </div>
        <br />
        <br />
        <h1 class="mb-3">Basic Information</h1>
        <hr />
        <div class="row">
          <FormPartC onChange={this.handleInput} />
        </div>
        <div class="row">
          <div class="col partD"></div>
        </div>
      </form>
    );
  }
}

export default OrderForm;
