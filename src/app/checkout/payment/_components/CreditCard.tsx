import { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import CreditCardImage from "./CreditCardImage";
import styles from "./CreditCard.module.scss";
import useInputFields from "@/hooks/useInputFields";

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
    if (e.target.value.length && !/^(\d|\/)+$/.test(e.target.value)) return;

    let updatedValue = `${e.target.value}`;

    console.log({ updatedValue, last: updatedValue[updatedValue.length - 1] });
    if (updatedValue[updatedValue.length - 1] === "/") {
      updatedValue = updatedValue.slice(0, -1);
    } else if (updatedValue.length > 1) {
      updatedValue = updatedValue.replace(/\//g, "");
      updatedValue = updatedValue.slice(0, 2) + "/" + updatedValue.slice(2, 4);
    }

    setExpireDate(updatedValue);

    // let updatedValue = e.target.value.replace(/\//g, "");
    // if (updatedValue.length !== 0 && !/^\d+$/.test(updatedValue)) {
    //   return;
    // }

    // if (updatedValue.length >= 1 && !["0", "1"].includes(updatedValue[0])) {
    //   updatedValue = "";
    // }
    // // Limit the month to 2 digits
    // if (updatedValue.length > 1 && updatedValue.slice(0, 2) > "12") {
    //   updatedValue = updatedValue.slice(0, 1);
    // }

    // let i = 2;

    // while (i < updatedValue.length) {
    //   updatedValue = updatedValue.slice(0,i) + "/" + updatedValue.slice(i);

    //   i += 3;
    // }

    // setExpireDate(updatedValue);
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
      <label htmlFor="cardholder-name" className={styles.label}>
        Cardholder Name
      </label>
      <Input
        id="cardholder-name"
        onChange={handleCardHolder}
        value={cardHolder}
        maxLength={22}
        className={`${styles.input} ${styles.cardholderName}`}
        pattern="[A-Za-z\s]*" // Adds HTML5 validation
      />

      <label htmlFor="card-detauls" className={styles.label}>
        Card Details
      </label>
      <div className={styles.cardDetails}>
        <div className={styles.cardDetailsNumberWrapper}>
          <Input
            className={styles.cardDetailsNumber}
            placeholder="Card Number"
            value={cardNumber}
            maxLength={19}
            onChange={handleCardNumberChange}
          />
          <div className={styles.cardDetailsExp}>
            <input
              className={`${styles.cardDetailsExpInput} ${styles.cardDetailsExpInputMonth}`}
              placeholder="MM"
            />
            <span className={styles.cardDetailsExpSlash}>/</span>
            <input
              className={`${styles.cardDetailsExpInput} ${styles.cardDetailsExpInputYear}`}
              placeholder="YY"
            />
          </div>
        </div>
        <Input
          className={styles.cardDetailsCVV}
          placeholder="CVV"
          maxLength={4}
          onChange={handleCvv}
          value={cvv}
        />
      </div>

      <Button>Add Card</Button>
    </div>
  );
}
