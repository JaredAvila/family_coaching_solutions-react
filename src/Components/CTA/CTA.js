import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Waypoint } from "react-waypoint";

import classes from "./CTA.css";
import animate from "../../UI/Animations.css";

class CTA extends Component {
  state = {
    btnClasses: [classes.Button]
  };
  onEnderHandler = () => {
    this.setState({
      btnClasses: [classes.Button, animate.BtnShake]
    });
  };
  render() {
    return (
      <div className={classes.CTA}>
        <h2 className={classes.Schedule}>
          Schedule your FREE twenty minute phone session today!
        </h2>
        <Link to="/contact" className={this.state.btnClasses.join(" ")}>
          Contact{" "}
          <Waypoint onEnter={this.onEnderHandler}>
            <span className={classes.Arrow}>
              <i className="material-icons">arrow_right_alt</i>
            </span>
          </Waypoint>
        </Link>
      </div>
    );
  }
}

export default CTA;
