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
        <h1 className="sidebar_username">My Name</h1>
        <div className="sidebar_usericon"></div>
        <ul className="navlist">
          <li>
            <FontAwesomeIcon
              className="navlist_icon"
              icon={faChartLine}
              size="lg"
            />
            <Link className="navlist_link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <FontAwesomeIcon className="navlist_icon" icon={faTable} />
            <Link className="navlist_link" to="/records">
              Records
            </Link>
          </li>
          <li>
            <FontAwesomeIcon className="navlist_icon" icon={faPen} />
            <Link className="navlist_link" to="/form">
              Form
            </Link>
          </li>
          <li>
            <FontAwesomeIcon className="navlist_icon" icon={faCog} />
            <Link className="navlist_link" to="/setting">
              Setting
            </Link>
          </li>
          <li>
            <FontAwesomeIcon
              className="navlist_icon"
              icon={faSignOutAlt}
              size="lg"
            />
            <Link className="navlist_link" to="/login">
              Signout
            </Link>
          </li>
        </ul>
        <p className="copyright">@2019 Cocomall Technology Ltd</p>
      </div>
    );
  }
}

export default SideBar;
