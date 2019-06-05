import React, { Fragment } from "react";

import AboutComp from "../../Components/AboutComp/AboutComp";
import CTA from "../../Components/CTA/CTA";

import classes from "./About.css";

const About = () => {
  return (
    <Fragment>
      <div className={classes.About}>
        <h1 className={classes.Title}>Who is this guy?</h1>
        <div className={classes.NameTag}>
          <h1 className={classes.Name}>Jay Harnden</h1>
          <h3 className={classes.Sub}>
            Certified Christian Counselor/Life Coach
          </h3>
        </div>
      </div>
      <AboutComp />
      <CTA />
    </Fragment>
  );
};

export default About;
