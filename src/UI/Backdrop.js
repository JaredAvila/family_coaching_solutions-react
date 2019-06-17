import React from "react";
import styles from "./Backdrop.css";

const Backdrop = props => {
  let classes = [styles.Backdrop, styles.Closed];
  props.open
    ? (classes = [styles.Backdrop, styles.Open])
    : (classes = [styles.Backdrop, styles.Closed]);
  return <div onClick={props.click} className={classes.join(" ")} />;
};

export default Backdrop;
