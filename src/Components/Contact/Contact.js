import React from "react";

import classes from "./Contact.css";

const Contact = () => {
  return (
    <div className={classes.Contact}>
      <form className={classes.Form}>
        <h3 className={classes.Title}>Let's talk</h3>

        <div className={classes.Input_field}>
          <i className="material-icons">account_box</i>
          <input
            className={classes.Input}
            placeholder="Name"
            type="text"
            name="name"
          />
          <label htmlFor="name" className={classes.Label}>
            Name
          </label>
        </div>
        <div className={classes.Input_field}>
          <i className="material-icons">email</i>
          <input
            className={classes.Input}
            type="text"
            name="email"
            placeholder="Email"
          />
          <label htmlFor="email" className={classes.Label}>
            Email
          </label>
        </div>
        <div className={classes.Input_field}>
          <i className="material-icons">question_answer</i>
          <textarea
            className={classes.Textarea}
            name="message"
            cols="30"
            rows="1"
            placeholder="Message"
          />
          <label htmlFor="message" className={classes.Label}>
            Message
          </label>
        </div>
        <button className={classes.Button} type="button">
          Connect <i className="material-icons">send</i>
        </button>
      </form>
    </div>
  );
};

export default Contact;
