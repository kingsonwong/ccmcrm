import React, { Component } from "react";
import Sidebar from "./components/sidebar";
import LoginBox from "./components/login";
import Dashboard from "./components/dashboard";
import Records from "./components/records";
import Forms from "./components/form";
import Settings from "./components/settings";
import SubSideBar from "./components/subsidebar";

import { Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login">
            <LoginBox />
          </Route>
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
          <Route path="/">
            <Records />
          </Route>
        </Switch>
        <Sidebar />
        <SubSideBar />
      </div>
    );
  }
}

export default App;
