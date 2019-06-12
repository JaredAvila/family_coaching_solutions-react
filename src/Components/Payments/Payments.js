import React from "react";

import styles from "./Payments.css";

const Payments = () => {
  return (
    <div className={styles.Payments}>
      <h1>Payment Information</h1>
      <div className={styles.Divide}>
        <div className={styles.PaymentInfo}>
          <p className={styles.Accepted}>I accept the following:</p>
          <ul>
            <li>Credit Cards*</li>
            <li>Personal Checks</li>
            <li>Money Orders</li>
            <li>Cashiers Checks</li>
          </ul>
          <p>
            <em>*Credit Card Payments through PayPal</em>
          </p>
        </div>
        <div className={styles.Send}>
          <p className={styles.Accepted}>Please send payments to:</p>
          <p>
            Jay Harnden
            <br />
            80 Gilman Ave, Suite 31C
            <br />
            Campbell, CA 95008
          </p>
          <p>(408)449-3057</p>
        </div>
      </div>
      <h1 className={styles.Make}>Make a payment now</h1>
      <button>PayPal Button</button>
    </div>
  );
};

export default Payments;
