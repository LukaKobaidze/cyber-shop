'use client'
import { useState } from "react";
import styles from "./Payment.module.scss";
import CreditCard from "./CreditCard";
import Paypal from "./Paypal";
import PaypalCredit from "./PaypalCredit";

interface Props {}

export default function Payment(props: Props) {
  const [navigation, setNavigation] = useState("credit-card");

  return (
    <div className={styles.payment}>
      <h1 className={styles.title}>Payment</h1>

      <div className={styles.paymentNav}>
        <span
          onClick={() => setNavigation("credit-card")}
          className={navigation === "credit-card" ? styles.active : ""}
        >
          Credit Card
        </span>
        <span
          onClick={() => setNavigation("paypal")}
          className={navigation === "paypal" ? styles.active : ""}
        >
          PayPal
        </span>
        <span
          onClick={() => setNavigation("paypal-credit")}
          className={navigation === "paypal-credit" ? styles.active : ""}
        >
          PayPal Credit
        </span>
      </div>

      {navigation === 'credit-card' && <CreditCard />}
      {navigation === 'paypal' && <Paypal />}
      {navigation === 'paypal-credit' && <PaypalCredit />}
    </div>
  );
}
