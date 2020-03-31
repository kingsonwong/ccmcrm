import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "./components/loginForm";
import OrderTable from "./components/orderTable";
import MainMenu from "./components/mainMenu";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {localStorage.user && <MainMenu />}

        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/orders">
            {localStorage.user ? <OrderTable /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/">
            {localStorage.user ? (
              <Redirect to="/orders" />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
