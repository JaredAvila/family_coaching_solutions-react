import React from "react";

import classes from "./Landing.css";
import animate from "../../UI/Animations.css";

const Landing = () => {
  let mainClasses = [classes.Main, animate.FadeInLeft];
  let subClasses = [classes.Sub, animate.FadeInRight];
  return (
    <section className={classes.Header}>
      <div className={classes.Landing} />
      <div className={classes.Showcase}>
        <h1 className={mainClasses.join(" ")}>Family Coaching Solutions</h1>
        <h3 className={subClasses.join(" ")}>Building New Beginnings</h3>
      </div>
    </section>
  );
};

export default Landing;
