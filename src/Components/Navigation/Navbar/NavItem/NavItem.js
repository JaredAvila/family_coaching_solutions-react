import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavItem.css";

const NavItem = props => {
  return (
    <li className={classes.NavItem}>
      <NavLink className={classes.NavLink} to={props.link} exact>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavItem;
