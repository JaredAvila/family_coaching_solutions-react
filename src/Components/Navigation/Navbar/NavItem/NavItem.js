import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavItem.css";

const NavItem = props => {
  let navigationItem = (
    <NavLink className={classes.NavLink} to={props.link} exact>
      {props.children}
    </NavLink>
  );
  if (props.outside) {
    navigationItem = (
      <a
        className={classes.NavLink}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  }
  return <li className={classes.NavItem}>{navigationItem}</li>;
};

export default NavItem;
