import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from "./AddCreditCard.module.scss";
import useInputFields from "@/hooks/useInputFields";
import containsOnlyNumbers from "@/utils/containsOnlyNumbers";
import { CheckoutStore } from "@/stores/checkout/checkout-store";
import { useRef } from "react";

const CARD_NUMBER_DEFAULT = "0000 0000 0000 0000";

interface Props {
  onSubmit: (creditCard: NonNullable<CheckoutStore["payment"]>) => void;
}

export default function AddCreditCard({ onSubmit }: Props) {
  const { fields, error, onFieldUpdate, setError, validateEmpty } =
    useInputFields([
      "cardholderName",
      "cardNumber",
      "expMonth",
      "expYear",
      "cvv",
    ]);

  const expMonthRef = useRef<HTMLInputElement>(null);
  const expYearRef = useRef<HTMLInputElement>(null);
  const cvvRef = useRef<HTMLInputElement>(null);

  const handleCardholderNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = e.target.value.toUpperCase();
    const filteredValue = inputValue.replace(/[^A-Z\s]/g, "");
    onFieldUpdate(filteredValue, "cardholderName");
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updated =
      e.target.value
        .replace(/(\s|[^0-9])/g, "")
        .match(/.{1,4}/g)
        ?.join(" ") || "";

    onFieldUpdate(updated, "cardNumber");
    if (updated.length === 19) {
      expMonthRef.current?.focus();
    }
  };

  const handleExpMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() && !containsOnlyNumbers(e.target.value)) {
      return;
    }

    onFieldUpdate(e.target.value, "expMonth");

    if (e.target.value.length === 2) {
      expYearRef.current?.focus();
    }
  };

  const handleExpYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() && !containsOnlyNumbers(e.target.value)) {
      return;
    }

    onFieldUpdate(e.target.value, "expYear");

    if (e.target.value.length === 2) {
      cvvRef.current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      validateEmpty();

      onSubmit({
        id: String(new Date().getTime()),
        cardNumberLastFour: fields.cardNumber.slice(-4),
      });
    } catch (_) {}
  };

  return (
    <div>
      <div
        className={styles.creditCardImage}
        style={{ backgroundImage: `url('/credit-card2.png')` }}
      >
        <div
          className={`${styles.creditCardImageCardholder} ${
            fields.cardholderName !== "" ? styles.active : ""
          }`}
        >
          {fields.cardholderName ? fields.cardholderName : "Cardhodler"}
        </div>
        <div className={styles.creditCardImageCardNumber}>
          <span className={styles.creditCardImageCardNumberValue}>
            {fields.cardNumber}
          </span>
          <span className={styles.creditCardImageCardNumberDefaultValue}>
            {CARD_NUMBER_DEFAULT.slice(fields.cardNumber.length)}
          </span>
        </div>
        <div
          className={`${styles.creditCardImageExp} ${
            fields.expMonth !== "" ? styles.active : ""
          }`}
        >
          <span className={fields.expMonth ? styles.active : ""}>
            {fields.expMonth || "MM"}
          </span>
          <span
            className={fields.expMonth && fields.expYear ? styles.active : ""}
          >
            /
          </span>
          <span className={fields.expYear ? styles.active : ""}>
            {fields.expYear || "YY"}
          </span>
        </div>
        <div
          className={`${styles.creditCardImageCVV} ${fields.cvv !== "" ? styles.active : ""}`}
        >
          {fields.cvv || "CVV"}
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="cardholder-name" className={styles.label}>
          Cardholder Name
        </label>
        <Input
          id="cardholder-name"
          placeholder="Name"
          className={`${styles.input} ${styles.cardholderName}`}
          value={fields.cardholderName}
          onChange={handleCardholderNameChange}
          error={error?.field === "cardholderName"}
        />

        <label htmlFor="card-number" className={styles.label}>
          Card Details
        </label>
        <div className={styles.cardDetails}>
          <div className={styles.cardDetailsNumberWrapper}>
            <Input
              id="card-number"
              className={styles.cardDetailsNumber}
              placeholder="Card Number"
              maxLength={19}
              value={fields.cardNumber}
              onChange={handleCardNumberChange}
              error={error?.field === "cardNumber"}
            />
            <div className={styles.cardDetailsExp}>
              <input
                ref={expMonthRef}
                className={`${styles.cardDetailsExpInput} ${styles.cardDetailsExpInputMonth} ${error?.field === "expMonth" ? styles.error : ""}`}
                placeholder="mm"
                maxLength={2}
                value={fields.expMonth}
                onChange={handleExpMonthChange}
              />
              <span className={styles.cardDetailsExpSlash}>/</span>
              <input
                ref={expYearRef}
                className={`${styles.cardDetailsExpInput} ${styles.cardDetailsExpInputYear} ${error?.field === "expYear" ? styles.error : ""}`}
                placeholder="yy"
                maxLength={2}
                value={fields.expYear}
                onChange={handleExpYearChange}
              />
            </div>
          </div>
          <Input
            ref={cvvRef}
            className={styles.cardDetailsCVV}
            placeholder="CVV"
            maxLength={4}
            onChange={(e) => onFieldUpdate(e.target.value, "cvv")}
            value={fields.cvv}
            error={error?.field === "cvv"}
          />
        </div>
        <div className={styles.errorMessage}>
          {error?.message && <p>{error.message}</p>}
        </div>

        <Button>Add Card</Button>
      </form>
    </div>
  );
}
