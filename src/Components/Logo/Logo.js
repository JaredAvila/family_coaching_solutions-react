import React from "react";
import logo from "../../assets/images/Logo.png";

import classes from "./Logo.css";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Family Coaching Solutions" />
      <h4>Menu</h4>
    </div>
  );
};

export default Logo;
