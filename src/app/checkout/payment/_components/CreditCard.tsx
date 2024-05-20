import Input from "@/components/Input";
import styles from "./CreditCard.module.scss";
import Button from "@/components/Button";
import { useState } from "react";

interface Props {}

export default function CreditCard(props: Props) {
  const [cardNumber, setCardNumber] = useState("0000000000000000");
  const [cardHolder, setCardHolder] = useState("Cardholder");
  const [expireDate, setExpireDate] = useState("Month/Year");
  const [cvv, setCvv] = useState("CVV");

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  const handleCardHolder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardHolder(e.target.value.toUpperCase());
  };

  const handleExpireDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpireDate(e.target.value);
  };
  const handleCvv = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(e.target.value);
  };

  const formatCardNumber = (number: string) => {
    return number
      .replace(/\s+/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim()
      .split(" ")
      .map((chunk, index) => <span key={index}>{chunk}</span>);
  };
  return (
    <div className={styles.container}>
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
          className={`${styles.creditNumber} ${
            cardNumber !== "0000000000000000" ? styles.active : ""
          }`}
        >
          {formatCardNumber(cardNumber)}
        </div>
        <div
          className={`${styles.expireDate} ${
            expireDate !== "Month/Year" ? styles.active : ""
          }`}
        >
          {expireDate}
        </div>
        <div className={`${styles.cvv} ${cvv !== 'CVV' ? styles.active : ''}`}>{cvv}</div>
      </div>

      <Input
        placeholder="Cardholder Name"
        onChange={handleCardHolder}
        className={styles.cardHolder}
      />
      <Input
        onChange={handleCardNumber}
        placeholder="Card Number"
        addCard
        maxLength={25}
        allowNumbers
        upperCase
        className={styles.cardNumber}
      />

      <div className={styles.inputHolder}>
        <Input
          onChange={handleExpireDate}
          placeholder="Exp.Date"
          expDate
          maxLength={5}
          className={styles.expDate}
        />

        <Input
          placeholder="CVV"
          maxLength={4}
          allowNumbers
          className={styles.cvv}
          onChange={handleCvv}
        />
      </div>

      <Button>Add Card</Button>
    </div>
  );
}
