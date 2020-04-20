import React, { Component } from "react";

class Thead extends Component {
  state = {};
  render() {
    return (
      <thead class="thead-dark">
        <tr>
          <th scope="col">Invoice ID</th>
          <th scope="col">Case ID</th>
          <th scope="col">Record Date</th>
          <th scope="col">Staff</th>
          <th scope="col">Completed</th>
          <th scope="col">Revenue</th>
          <th scope="col">Discount</th>
          <th scope="col">Cost</th>
          <th scope="col">PBC</th>
          <th scope="col">Coupon</th>
          <th scope="col">Net Profit</th>
        </tr>
      </thead>
    );
  }
}

export default Thead;
