import React from "react";

import PayPal from "../../assets/images/paypal.png";
import Venmo from "../../assets/images/venmo.png";

import styles from "./Payments.css";

const Payments = () => {
  return (
    <div className={styles.Payments}>
      <h1>Payment Information</h1>
      <div className={styles.Divide}>
        <div className={styles.PaymentInfo}>
          <p className={styles.Accepted}>I accept the following:</p>
          <ul>
            <li>Cash</li>
            <li>Personal Checks</li>
            <li>Credit Cards*</li>
          </ul>
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
      <div className={styles.Logos}>
        <img src={PayPal} alt="paypal payments accepted" />
        <img src={Venmo} alt="venmo payments accepted" />
      </div>
      <p>
        <em>*Credit Card payments accepted via PayPal or Venmo</em>
      </p>
    </div>
  );
};

export default Payments;
