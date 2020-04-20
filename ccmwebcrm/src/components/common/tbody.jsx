import React, { Component } from "react";
import TableRow from "./trow";

class Tbody extends Component {
  state = {};
  render() {
    const { data, handleRowSelected } = this.props;
    return (
      <tbody>
        {data.map((orderObj) => {
          return (
            <TableRow
              key={orderObj.ccm_invoice_no}
              handleRowSelected={handleRowSelected}
              orderObj={orderObj}
            ></TableRow>
          );
        })}
      </tbody>
    );
  }
}

export default Tbody;
