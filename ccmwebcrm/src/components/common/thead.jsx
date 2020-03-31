import React, { Component } from "react";

class Thead extends Component {
  state = {};
  render() {
    return (
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
    );
  }
}

export default Thead;
