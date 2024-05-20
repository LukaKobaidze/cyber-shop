import { useState } from "react";
import styles from "./CreditCardImage.module.scss";

const CARD_NUMBER_DEFAULT = "0000 0000 0000 0000";

interface Props {
  cardNumber: string;
}

export default function CreditCardImage(props: Props) {
  const { cardNumber } = props;

  const [cardHolder, setCardHolder] = useState("Cardholder");
  const [expireDate, setExpireDate] = useState("Month/Year");
  const [cvv, setCvv] = useState("CVV");

  return (
    <div
      className={styles.creditCard}
      style={{ backgroundImage: `url('/credit-card2.png')` }}
    >
      <div
        className={`${styles.creditHolder} ${
          cardHolder !== "Cardholder" ? styles.active : ""
        }`}
      >
        {cardHolder}
      </div>
      <div
        className={styles.cardNumber}
      >
        <span className={styles.cardNumberValue}>{cardNumber}</span>
        <span className={styles.cardNumberDefaultValue}>{CARD_NUMBER_DEFAULT.slice(cardNumber.length)}</span>
      </div>
      <div
        className={`${styles.expireDate} ${
          expireDate !== "Month/Year" ? styles.active : ""
        }`}
      >
        {expireDate}
      </div>
      <div className={`${styles.cvv} ${cvv !== "CVV" ? styles.active : ""}`}>
        {cvv}
      </div>
    </div>
  );
}
