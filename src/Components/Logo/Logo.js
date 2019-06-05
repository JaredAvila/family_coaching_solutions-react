import React from "react";
import logo from "../../assets/images/Logo.png";

import classes from "./Logo.css";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Family Coaching Solutions" />
    </div>
  );
};

export default Logo;
