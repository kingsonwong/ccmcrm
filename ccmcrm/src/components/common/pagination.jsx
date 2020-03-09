import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  state = {};
  render() {
    const { onPageChange, MaxPages } = this.props;
    console.log(MaxPages);
    let pages = _.range(1, MaxPages + 1);

    return (
      <nav aria-label="bottom_pagination_area">
        <ul class="pagination">
          <li class="page-item page-item_left">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          {pages.map(i => {
            return (
              <li class="page-item page-item_middle">
                <a class="page-link" onClick={() => onPageChange(i)}>
                  {i}
                </a>
              </li>
            );
          })}
          <li class="page-item page-item_right">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
