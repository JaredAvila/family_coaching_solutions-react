import React from "react";
import { Link } from "react-router-dom";

import classes from "./CTA.css";

const CTA = () => {
  return (
    <div className={classes.CTA}>
      <h2 className={classes.Schedule}>
        Schedule your FREE twenty minute phone session today!
      </h2>
      <Link to="/" className={classes.Button}>
        Contact{" "}
        <span className={classes.Arrow}>
          <i className="material-icons">arrow_right_alt</i>
        </span>
      </Link>
    </div>
  );
};

export default CTA;
