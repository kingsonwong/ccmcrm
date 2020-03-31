import React, { Component } from "react";
import Button from "./common/button";
import Input from "./common/input";
import Checkbox from "./common/checkBox";
import Form from "./common/form";

class LoginForm extends Form {
  state = {};

  handleLogin = e => {
    e.preventDefault();
    localStorage.setItem("user", this.state.inputEmail);

    window.location = "/";
  };

  render() {
    return (
      <form class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

        <Input
          type="email"
          id="inputEmail"
          class="form-control mb-3"
          placeholder="Email address"
          required=""
          autofocus=""
          onChange={this.handleInput}
        />

        <Input
          type="password"
          id="inputPassword"
          class="form-control mb-3"
          placeholder="Password"
          required=""
          onChange={this.handleInput}
        />
        <Checkbox label="Remember me" value="remember-me" />

        <Button
          class="btn btn-lg btn-primary btn-block"
          type="submit"
          text="Sign in"
          onClick={this.handleLogin}
        />
      </form>
    );
  }
}

export default LoginForm;
