import React from "react";

import classes from "./Card.css";

const Card = props => {
  return (
    <div className={classes.Card}>
      <h3 className={classes.Title}>{props.title}</h3>
      <i className="material-icons">{props.icon}</i>
      <p className={classes.Para}>{props.paragraph}</p>
    </div>
  );
};

export default Card;
