import React, { Component } from "react";
import Sidebar from "./components/sidebar";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Records from "./components/records";
import Forms from "./components/form";
import Settings from "./components/settings";
import SubSideBar from "./components/subsidebar";
import { login } from "./services/authservice";
import { Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    account: { email: "", password: "" }
  };

  handleLoginSubmit = async e => {
    const { account } = this.state;
    e.preventDefault();
    const response = await login(account.email, account.password);
  };

  handleInputChange = e => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/records">
            <Records />
          </Route>
          <Route path="/form">
            <Forms />
          </Route>
          <Route path="/setting">
            <Settings />
          </Route>
          <Route path="/login">
            <Login
              handleSubmit={this.handleLoginSubmit}
              account={account}
              handleInputChange={this.handleInputChange}
            />
          </Route>
          <Route path="/">
            <Records />
          </Route>
        </Switch>
        {!account.username ? "" : <Sidebar />}
        {!account.username ? "" : <SubSideBar />}
      </div>
    );
  }
}

export default App;
