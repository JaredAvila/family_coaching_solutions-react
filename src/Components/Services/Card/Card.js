import React, { Component } from "react";

import { Waypoint } from "react-waypoint";

import classes from "./Card.css";
import animate from "../../../UI/Animations.css";

class Card extends Component {
  state = {
    cardClass: [classes.Card]
  };
  onEnter = () => {
    switch (this.props.title) {
      case "Counseling/Life Coaching":
        this.setState({
          cardClass: [classes.Card, animate.FadeInLeft]
        });
        break;
      case "Parenting Clashes":
        this.setState({
          cardClass: [classes.Card, animate.FadeInUp]
        });
        break;
      case "Mentoring":
        this.setState({
          cardClass: [classes.Card, animate.FadeInRight]
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <Waypoint onEnter={this.onEnter}>
        <div className={this.state.cardClass.join(" ")}>
          <h3 className={classes.Title}>{this.props.title}</h3>
          <i className="material-icons">{this.props.icon}</i>
          <p className={classes.Para}>{this.props.paragraph}</p>
        </div>
      </Waypoint>
    );
  }
}

export default Card;
