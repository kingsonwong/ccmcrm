import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, label, ...rest }) => {
  return (
    <li class="nav-item">
      <Link {...rest} to={to}>
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
