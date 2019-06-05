import React from "react";

import classes from "./AboutComp.css";

const AboutComp = () => {
  const nameCardClasses = [classes.Card, classes.Names];
  return (
    <div className={classes.AboutComp}>
      <div className={classes.Left}>
        <div className={nameCardClasses.join(" ")}>
          <h4 className={classes.NameTitle}>I go by many names...</h4>
          <ul className={classes.NameList}>
            <li>Husband</li>
            <li>Father</li>
            <li>Grandfather</li>
            <li>Coach</li>
            <li>Drummer</li>
            <li>That guy</li>
          </ul>
        </div>
        <div className={nameCardClasses.join(" ")}>
          <h4 className={classes.NameTitle}>I go by many names...</h4>
          <ul className={classes.NameList}>
            <li>Husband</li>
            <li>Father</li>
            <li>Grandfather</li>
            <li>Coach</li>
            <li>Drummer</li>
            <li>That guy</li>
          </ul>
        </div>
      </div>

      <div className={classes.Right}>
        <div className={classes.Card}>
          <h4 className={classes.NameTitle}>A little bit of everything</h4>
          <p className={classes.Para}>
            I've been a grocery clerk, an independent distributor (bread route
            driver), a program coordinator at an alcohol/drug rehabilitation
            facility ... but I found my passion over ten years ago when I
            started working with men and fathers. I met a man named Vance Simms,
            who really changed my direction in life. He's the Founder of Father
            Matters (www.fathermatters.org). I became involved, and with Vance
            and Eric Rosa helped countless men and fathers around the country
            become more responsible, productive, caring people which directly
            affected their relationships with loved ones in a very positive way.
            <br />
            <br />
            Now, with the development of Family Coaching Solutions, my desire to
            help men, fathers, and families has taken on a new face, but with
            the same basic foundation. I have learned over the years that many
            situations can be dealt with in a positive, nurturing way that is
            beneficial to all people involved. Whether it's setting and reaching
            realistic goals personally or in the family dynamic; learning the
            ability to make change happen; desiring a deeper spiritual
            relationship with God; working through parent/child conflict; or
            just wanting to move forward in a positive direction, I can help you
            get on track and lead a more balanced, healthy life. Your future has
            never looked so bright!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
