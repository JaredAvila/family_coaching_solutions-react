import React, { Component } from "react";
import { Waypoint } from "react-waypoint";

import styles from "./ServiceLanding.css";
import animate from "../../../UI/Animations.css";

class ServiceLanding extends Component {
  state = {
    mainClasses: [styles.Main],
    subClasses: [styles.Sub]
  };

  onEnterHandler = () => {
    this.setState({
      mainClasses: [styles.Main, animate.FadeInLeft],
      subClasses: [styles.Sub, animate.FadeInRight]
    });
  };

  render() {
    return (
      <Waypoint onEnter={this.onEnterHandler}>
        <div className={styles.ServiceLanding}>
          <h1 className={this.state.mainClasses.join(" ")}>My Services</h1>
          <h2 className={this.state.subClasses.join(" ")}>
            Building New Beginnings
          </h2>
        </div>
      </Waypoint>
    );
  }
}

export default ServiceLanding;
