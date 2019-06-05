import React from "react";

import classes from "./Landing.css";

const Landing = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Landing} />
      <div className={classes.Showcase}>
        <h1 className={classes.Main}>Family Coaching Solutions</h1>
        <h3 className={classes.Sub}>Building New Beginnings</h3>
      </div>
    </div>
  );
};

export default Landing;