import React, { Component } from "react";

import Card from "./Card/Card";
import { Waypoint } from "react-waypoint";

import classes from "./Services.css";
import animate from "../../UI/Animations.css";

class Services extends Component {
  state = {
    headingClasses: [classes.Heading],
    cards: [
      {
        title: "Counseling/Life Coaching",
        icon: "accessibility_new",
        paragraph:
          "With compassion, awareness, encouragement and support, I can assist you in becoming the best YOU possible!  We all get stuck, lose focus, or lack direction and motivation at times...don’t hesitate to reach out and take that first step on the road to improvement.  Going through difficult times is a part of life...if you need help, it’s available. Do the best thing you can for yourself and your family...seek help from someone with your best interests in mind."
      },
      {
        title: "Parenting Clashes",
        icon: "offline_bolt",
        paragraph:
          "Parenting can be one of the most difficult “jobs” a person will ever have.  Successful co-parenting can ease some of the pressure and even lower the stress involved with raising children.  Whether you’re single, married, or partnered, developing an effective plan that will keep your child’s best interests at heart, as well as yours, is key to laying a positive foundation that will benefit all involved for years to come.  Everyone has disagreements, different opinions, etc., so dealing with these “clashes” is necessary to keep everyone healthy and happy."
      },
      {
        title: "Mentoring",
        icon: "supervisor_account",
        paragraph:
          "I’ve spent years working with Father Matters, an organization committed to building stronger and healthier communities.  Through supporting, encouraging, and enlightening today’s fathers and families, we can move forward and create a more positive future for ourselves and our children.  Let’s deal with whatever issues are holding you back!"
      }
    ]
  };

  onEnter = () => {
    this.setState({ headingClasses: [classes.Heading, animate.FadeIn] });
  };

  render() {
    return (
      <section id="section-about" className={classes.Services}>
        <h2 className={this.state.headingClasses.join(" ")}>
          How can Family Coaching Solutions help you...
        </h2>
        <div className={classes.Spacer} />
        <Waypoint onEnter={this.onEnter}>
          <div className={classes.Cards}>
            {this.state.cards.map(card => (
              <Card
                key={card.title}
                title={card.title}
                icon={card.icon}
                paragraph={card.paragraph}
              />
            ))}
          </div>
        </Waypoint>
      </section>
    );
  }
}

export default Services;
