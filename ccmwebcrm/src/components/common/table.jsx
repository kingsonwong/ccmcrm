import React, { Component } from "react";
import Thead from "./thead";
import Tbody from "./tbody";

class Table extends Component {
  state = {};
  render() {
    return (
      <table class="table table-sm">
        <Thead />
        <Tbody />
      </table>
    );
  }
}

export default Table;
