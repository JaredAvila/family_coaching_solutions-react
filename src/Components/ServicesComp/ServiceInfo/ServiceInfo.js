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
        <div className={styles.Code}>
          <h3>Code of Ethics</h3>
          <ol className={styles.List}>
            <li>
              I will honor Jesus Christ in all that I do; both personally and
              professionally.
            </li>
            <li>
              I will hold myself accountable to the highest level of character
              and integrity, and will respect my clients at all times.
            </li>
            <li>
              I will not misrepresent myself, nor my qualifications, expertise,
              or experience as a Christian Life Coach.
            </li>
            <li>
              I will be compassionate, graceful, and nonjudgmental to all who
              are seeking Christian Coaching.
            </li>
            <li>
              I will respect people in their own faith journey, and will not
              impose my own specific religious beliefs.
            </li>
            <li>
              I will honor my Christian values in my professional conduct, and
              commit to grow both spiritually and intellectually through any
              combination of personal study, seminars, classes, lectures,
              workshops, etc.
            </li>
            <li>
              I will respect my client's right to privacy, and will keep all
              communication confidential, unless otherwise required by law.
            </li>
          </ol>
        </div>
        <div className={styles.Fees}>
          <h3>Rates/Fees</h3>
          <ul className={styles.Rates}>
            <li>1 hour - $105</li>
            <li>2 hours - $180</li>
            <li>3 hours - $250</li>
            <li>4 hours - $300</li>
          </ul>
          <p className={styles.Para}>
            <em>
              *** The multiple hourly rates are payable per month in advace, or
              at the beginning of the first session
            </em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
