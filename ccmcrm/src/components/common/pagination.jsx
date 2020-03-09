import React, { Component } from "react";

class Pagination extends Component {
  state = {};
  render() {
    return (
      <nav aria-label="bottom_pagination_area">
        <ul class="pagination">
          <li class="page-item page-item_left">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          <li class="page-item page-item_middle">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item page-item_middle">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item page-item_middle">
            <a class="page-link" href="#">
              3
            </a>
          </li>
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
