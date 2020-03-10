import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faTable,
  faPen,
  faCog,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar_usericon"></div>
        <ul className="navlist">
          <Link className="navlist_link" to="/dashboard">
            <li className="baritem">
              <FontAwesomeIcon className="navlist_icon" icon={faChartLine} />
            </li>
          </Link>
          <Link className="navlist_link" to="/records">
            <li className="baritem">
              <FontAwesomeIcon className="navlist_icon" icon={faTable} />
            </li>
          </Link>
          <Link className="navlist_link" to="/form">
            <li className="baritem">
              <FontAwesomeIcon className="navlist_icon" icon={faPen} />
            </li>
          </Link>
          <Link className="navlist_link" to="/setting">
            <li className="baritem">
              <FontAwesomeIcon className="navlist_icon" icon={faCog} />
            </li>
          </Link>
        </ul>
        <Link className="signout_button" to="/login">
          <FontAwesomeIcon className="navlist_icon" icon={faSignOutAlt} />
        </Link>
      </div>
    );
  }
}

export default SideBar;
