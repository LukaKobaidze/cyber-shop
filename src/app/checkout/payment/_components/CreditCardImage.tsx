import { useState } from "react";
import styles from "./CreditCardImage.module.scss";

const CARD_NUMBER_DEFAULT = "0000 0000 0000 0000";

interface Props {
  cardNumber: string;
  cardHolder: string;
  expireDate: string;
  cvv: string;
}

export default function CreditCardImage(props: Props) {
  const { cardNumber, cardHolder, expireDate, cvv } = props;

  return (
    <div
      className={styles.creditCard}
      style={{ backgroundImage: `url('/credit-card2.png')` }}
    >
      <div
        className={`${styles.creditHolder} ${
          cardHolder !== "" ? styles.active : ""
        }`}
      >
        {cardHolder ? cardHolder : 'Cardhodler'}
      </div>
      <div
        className={styles.cardNumber}
      >
        <span className={styles.cardNumberValue}>{cardNumber}</span>
        <span className={styles.cardNumberDefaultValue}>{CARD_NUMBER_DEFAULT.slice(cardNumber.length)}</span>
      </div>
      <div
        className={`${styles.expireDate} ${
          expireDate !== "" ? styles.active : ""
        }`}
      >
        {expireDate ? expireDate : 'Month/Year'}
      </div>
      <div className={`${styles.cvv} ${cvv !== "" ? styles.active : ""}`}>
        {cvv ? cvv : 'CVV'}
      </div>
    </div>
  );
}
