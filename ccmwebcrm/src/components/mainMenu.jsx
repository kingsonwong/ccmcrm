import React, { Component } from "react";
import NavItem from "./common/navItem";

class MainMenu extends Component {
  state = {};

  doLogout = e => {
    localStorage.removeItem("user");
    window.location = "/login";
  };

  render() {
    return (
      <nav class=" d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <NavItem label="Orders" to="/" className="nav-link active" />
            <NavItem label="Report" to="/" className="nav-link active" />
            <NavItem label="Setting" to="/" className="nav-link active" />
            <NavItem label="Products" to="/" className="nav-link active" />
            <NavItem
              label="Log Out"
              to="/login"
              className="nav-link active"
              onClick={this.doLogout}
            />
          </ul>
        </div>
      </nav>
    );
  }
}

export default MainMenu;
