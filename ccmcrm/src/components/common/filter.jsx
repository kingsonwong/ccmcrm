import React, { Component } from "react";

class Filter extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <button className="filter_button">+ Add Filter</button>
        <div className="filter_menu">
          <ul className="filter_menu_options_list">
            <li className="filter_menu_option">
              <p>ChoiceA</p>
            </li>

            <li className="filter_menu_option">
              <p>ChoiceB</p>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Filter;
