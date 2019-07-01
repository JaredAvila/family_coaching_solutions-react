import React from "react";

import * as styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div className={styles.Header}>
        <h1>Talk to me!</h1>
        <p>
          No automated phone menus. Your email is not going to fall into a black
          hole, never to be seen again. At Family Coaching Solutions you'll get
          connected to a real person. We know your time is valuable and we value
          you for reaching out.
        </p>
      </div>
    </div>
  );
};

export default Contact;
