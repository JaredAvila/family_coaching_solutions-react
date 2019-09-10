import React, { Component } from "react";
import { Waypoint } from "react-waypoint";

import classes from "./AboutComp.css";
import animate from "../../UI/Animations.css";

class AboutComp extends Component {
  state = {
    nameCardClasses: [classes.Card, classes.Names],
    bioClasses: [classes.Card],
    associationClasses: [classes.Card],
    proverbClasses: [classes.Proverb]
  };

  onLeftEnterHandler = () => {
    this.setState({
      nameCardClasses: [classes.Card, classes.Names, animate.FadeInLeft],
      bioClasses: [classes.Card, animate.FadeInRight]
    });
  };
  onRightEnterHandler = () => {
    this.setState({
      associationClasses: [classes.Card, animate.FadeInUp]
    });
  };

  proverbEnter = () => {
    this.setState({
      proverbClasses: [classes.Proverb, animate.DelayFade]
    });
  };

  render() {
    return (
      <div className={classes.AboutComp}>
        <div className={classes.Left}>
          <div className={this.state.nameCardClasses.join(" ")}>
            <h4 className={classes.NameTitle}>I go by many names...</h4>
            <ul className={classes.NameList}>
              <li>Husband</li>
              <li>Padre (Pod)</li>
              <li>Bumpa</li>
              <li>Coach</li>
              <Waypoint onEnter={this.onLeftEnterHandler}>
                <li>Drummer</li>
              </Waypoint>
              <li>That guy</li>
            </ul>
          </div>
          <div className={this.state.associationClasses.join(" ")}>
            <h4 className={classes.NameTitle}>Past and Present Associations</h4>
            <ul className={classes.Associations}>
              <li>
                <span>American Association of Christian Counselors</span>{" "}
                --Member
              </li>

              <li>
                <span>Christian Coaches Network</span> --Member
              </li>
              <li>
                <span>Pioneer Family Academy</span> --7th Grade Life Science
                Teacher/11th Grade Communication Teacher
              </li>
              <li>
                <span>Santa Clara County Fatherhood Collaborative</span>{" "}
                --Founding Member
              </li>
              <Waypoint onEnter={this.onRightEnterHandler}>
                <li>
                  <span>Father Matters, Inc.</span> --President
                </li>
              </Waypoint>
              <li>
                <span>Foundation of Family Values</span> --Parent Educator,
                Member
              </li>
              <li>
                <span>Mercy Hill Church</span> --Worship Team Drummer
              </li>
              <li>
                <span>Santa Clara County Perinatal Network</span> --Member
              </li>
              <li>
                <span>City of San Jose Domestic Violence Task Force</span>{" "}
                --Past Member
              </li>
              <li>
                <span>Adolescent Pregnancy Prevention Network</span> --Past
                Member
              </li>
              <li>
                <span>San Jose Pacific Pony Baseball League</span> --Past Board
                Member, Team Manager
              </li>
              <li>
                <span>Cambrian Basketball Association</span> --Former Coach
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.Right}>
          <div className={this.state.bioClasses.join(" ")}>
            <h4 className={classes.NameTitle}>A little bit of everything</h4>
            <p className={classes.Para}>
              I've been a grocery clerk, an independent distributor (bread route
              driver), a program coordinator/director at an alcohol/drug
              rehabilitation facility ... but I found my passion over twenty
              years ago when I started working with men and fathers. I met a man
              named Vance Simms, who really changed my direction in life. He's
              the Founder of Father Matters (
              <a
                href="www.fathermatters.org"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.Link}
              >
                www.fathermatters.org
              </a>
              ). I became involved, and with Vance and Eric Rosa helped
              countless men and fathers around the country become more
              responsible, productive, caring people which directly affected
              their relationships with loved ones in a very positive way.
              <br />
              <br />
              Now, with the development of Family Coaching Solutions, my desire
              to help men, fathers, and families has taken on a new face, but
              with the same basic foundation. I have learned over the years that
              many situations can be dealt with in a positive, nurturing way
              that is beneficial to all people involved. Whether it's setting
              and reaching realistic goals personally or in the family dynamic;
              learning the ability to make change happen; desiring a deeper
              spiritual relationship with God; working through parent/child
              conflict; or just wanting to move forward in a positive direction,
              I can help you get on track and lead a more balanced, healthy
              life. Your future has never looked so bright!
            </p>
          </div>
          <Waypoint onEnter={this.proverbEnter}>
            <div className={this.state.proverbClasses.join(" ")}>
              <h3 className={classes.BibleVerse}>
                "The purpose in a man's heart is like deep water, but a man of
                understanding will draw it out."
              </h3>
              <p className={classes.Prov}>--Proverbs 20:5</p>
            </div>
          </Waypoint>
        </div>
      </div>
    );
  }
}

export default AboutComp;
