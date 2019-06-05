import React from "react";

import Contact from "../Contact/Contact";

import classes from "./Connect.css";

const Connect = () => {
  return (
    <section className={classes.Connect} id="contact-section">
      <Contact />
      <div className={classes.Container}>
        <p className={classes.Para}>
          Family Coaching Solutions is here to help with many types of issues
          that exist within the faimly unit. Let's work together to find
          solutions and allow me to coach you to a more peaceful and balanced
          family dynamic. I specialize in Co-Parent counseling and coaching, as
          well as Conflict Resolution. <br />
          <br />
          Connect with me today to schedule your free 20-minute phone session.
        </p>
      </div>
    </section>
  );
};

export default Connect;
