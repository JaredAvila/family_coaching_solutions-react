import React, { Component } from "react";
import { Waypoint } from "react-waypoint";

import AboutComp from "../../Components/AboutComp/AboutComp";
import CTA from "../../Components/CTA/CTA";

import classes from "./About.css";
import animate from "../../UI/Animations.css";

class About extends Component {
  state = {
    titleClasses: [classes.Title],
    nameClasses: [classes.NameTag]
  };

  titleEnter = () => {
    this.setState({
      titleClasses: [classes.Title, animate.LightSpeedRight],
      nameClasses: [classes.NameTag, animate.FadeInUp]
    });
  };

  render() {
    return (
      <div className={animate.FadeIn}>
        <div className={classes.About}>
          <Waypoint onEnter={this.titleEnter}>
            <h1 className={this.state.titleClasses.join(" ")}>
              Who is this guy?
            </h1>
          </Waypoint>

          <div className={this.state.nameClasses.join(" ")}>
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
  }
}

export default About;
