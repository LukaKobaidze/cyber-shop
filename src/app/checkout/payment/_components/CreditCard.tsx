import Input from "@/components/Input";
import styles from "./CreditCard.module.scss";
import Button from "@/components/Button";
import { useState } from "react";
import CreditCardImage from "./CreditCardImage";

interface Props {}

export default function CreditCard(props: Props) {
  const [cardNumber, setCardNumber] = useState("");

  const [cardHolder, setCardHolder] = useState("Cardholder");
  const [expireDate, setExpireDate] = useState("Month/Year");
  const [cvv, setCvv] = useState("CVV");

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 0 && !/^(\d|\s)+$/.test(e.target.value)) {
      return;
    }

    let updatedValue = e.target.value.replace(/\s/g, "");

    let i = 4;

    while (i < updatedValue.length) {
      console.log("updated value before: ", updatedValue);
      updatedValue = updatedValue.slice(0, i) + " " + updatedValue.slice(i);

      i += 5;
    }

    setCardNumber(updatedValue);
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

  return (
    <div className={styles.container}>
      <CreditCardImage cardNumber={cardNumber} />
      <Input
        placeholder="Cardholder Name"
        onChange={handleCardHolder}
        className={styles.cardHolder}
      />
      <Input
        placeholder="Card Number"
        value={cardNumber}
        maxLength={19}
        onChange={handleCardNumberChange}
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
