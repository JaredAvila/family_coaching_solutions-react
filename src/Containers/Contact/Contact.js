import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import * as styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div className={styles.Header}>
        <h1>Talk to me!</h1>
        <p>
          You will not be talking to a robot in an automated phone menu. Your
          email is not going to fall into a black hole, never to be seen again.
          At Family Coaching Solutions you'll get connected to a real person. I
          know your time is valuable and I value you for reaching out.
        </p>
      </div>
      <main className={styles.Main}>
        <div className={styles.Left}>
          <h1>
            Family Coaching Solutions is here to help you gain control of your
            life!
          </h1>
          <p>
            I operate in an industry of trust and understanding. Let's work
            together to find solutions. Allow me to coach you to a more peacful
            and balanced family dynamic.
          </p>
          <h2>
            I'm here to help with many types of issues that exist within the
            family unit!
          </h2>
          <p className={styles.BottomPara}>
            I specialize in Co-parent counseling and coaching, as well as
            Conflict Resolution. Call today to schedule your free 20-minute
            phone session.
          </p>
          <h6>Contact me today!</h6>
          <h6>Your information</h6>
          <form
            action="https://formspree.io/jared.c.avila@gmail.com"
            method="POST"
          >
            <input type="text" name="name" placeholder="Your name" />
            <input type="email" name="email" placeholder="Email address" />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Message"
            />
            <input className={styles.SubmitBtn} type="submit" value="Submit" />
          </form>
        </div>
        <div className={styles.Right}>
          <div className={styles.Social}>
            <a href="https://www.facebook.com/Family-Coaching-Solutions-1074526972563404/">
              <FontAwesomeIcon className={styles.Icon} icon={faFacebook} />{" "}
              facebook
            </a>
            <a href="https://www.linkedin.com/in/jay-harnden-7760831a/">
              <FontAwesomeIcon className={styles.Icon} icon={faLinkedin} />{" "}
              linkedIn
            </a>
          </div>
          <hr />
          <div className={styles.Office}>
            <h4>Office</h4>
            <p>
              80 Gilman Ave., Suite 31C
              <br />
              Campbell, CA 95008
            </p>
            <h4>Direct Contact</h4>
            <p>Phone: (408) 449-3057</p>
            <p>Email: Jay@FamCoach.com</p>
          </div>
        </div>
      </main>
      <div className={styles.End}>
        <p>Family Coaching Solutions - Build on a foundation of love</p>
      </div>
    </div>
  );
};

export default Contact;
