import React from "react";
import styles from "./ServiceInfo.css";

const ServiceInfo = () => {
  return (
    <div className={styles.ServiceInfo}>
      <h1 className={styles.Title}>
        Family Coaching Solutions is here to help with many types of issues that
        exist within the family unit
      </h1>
      <div className={styles.Spacer} />
      <div className={styles.Boxes}>
        <h3>Code of Ethics</h3>
        <h3>Rates/Fees</h3>
      </div>
    </div>
  );
};

export default ServiceInfo;
