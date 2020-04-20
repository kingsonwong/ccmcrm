import React, { Component } from "react";
import Thead from "./thead";
import Tbody from "./tbody";

class Table extends Component {
  state = {};
  render() {
    const { data, handleRowSelected } = this.props;
    return (
      <table class="table table-sm">
        <Thead />
        <Tbody data={data} handleRowSelected={handleRowSelected} />
      </table>
    );
  }
}

export default Table;
