import React from "react";

import AboutComp from "../../Components/AboutComp/AboutComp";
import CTA from "../../Components/CTA/CTA";

import classes from "./About.css";
import animate from "../../UI/Animations.css";

const About = () => {
  return (
    <div className={animate.FadeIn}>
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
    </div>
  );
};

export default About;
