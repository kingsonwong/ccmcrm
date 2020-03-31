import React, { Component } from "react";

class Form extends Component {
  handleInput = e => {
    let state = { ...this.state };
    state[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ ...state });
  };
}

export default Form;
