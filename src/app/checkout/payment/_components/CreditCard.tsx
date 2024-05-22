import Input from "@/components/Input";
import styles from "./CreditCard.module.scss";
import Button from "@/components/Button";
import { useState } from "react";
import CreditCardImage from "./CreditCardImage";

interface Props {}

export default function CreditCard(props: Props) {
  const [cardNumber, setCardNumber] = useState("");

  const [cardHolder, setCardHolder] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 0 && !/^(\d|\s)+$/.test(e.target.value)) {
      return;
    }

    let updatedValue = e.target.value.replace(/\s/g, "");

    let i = 4;

    while (i < updatedValue.length) {
      updatedValue = updatedValue.slice(0, i) + " " + updatedValue.slice(i);

      i += 5;
    }

    setCardNumber(updatedValue);
  };

  const handleCardHolder = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toUpperCase();
    const filteredValue = inputValue.replace(/[^A-Z\s]/g, "");
    setCardHolder(filteredValue);
  };

  const handleExpireDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    let updatedValue = e.target.value.replace(/\//g, "");
    if (updatedValue.length !== 0 && !/^\d+$/.test(updatedValue)) {
      return;
    }

    if (updatedValue.length >= 1 && !["0", "1"].includes(updatedValue[0])) {
      updatedValue = "";
    }
    // Limit the month to 2 digits
    if (updatedValue.length > 1 && updatedValue.slice(0, 2) > "12") {
      updatedValue = updatedValue.slice(0, 1);
    }

    let i = 2;

    while (i < updatedValue.length) {
      updatedValue = updatedValue.slice(0,i) + "/" + updatedValue.slice(i);

      i += 3;
    }

    setExpireDate(updatedValue);
  };

  const handleCvv = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 0 && !/^\d+$/.test(e.target.value)) {
      return;
    }
    setCvv(e.target.value);
  };

  return (
    <div className={styles.container}>
      <CreditCardImage
        cardNumber={cardNumber}
        cardHolder={cardHolder}
        expireDate={expireDate}
        cvv={cvv}
      />
      <Input
        placeholder="Cardholder Name"
        onChange={handleCardHolder}
        value={cardHolder}
        maxLength={22}
        className={styles.cardHolder}
        pattern="[A-Za-z\s]*" // Adds HTML5 validation
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
          placeholder="MM/YY"
          maxLength={5}
          value={expireDate}
          className={styles.expDate}
        />

        <Input
          placeholder="CVV"
          maxLength={4}
          className={styles.cvv}
          onChange={handleCvv}
          value={cvv}
        />
      </div>

      <Button>Add Card</Button>
    </div>
  );
}
