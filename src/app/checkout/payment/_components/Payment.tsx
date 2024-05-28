"use client";
import { useState } from "react";
import styles from "./Payment.module.scss";
import AddCreditCard from "./AddCreditCard";
import { CheckoutStore } from "@/stores/checkout/checkout-store";
import InputRadio from "@/components/InputRadio";
import { useCheckoutStore } from "@/stores/checkout";

interface Props {}

export default function Payment(props: Props) {
  const payment = useCheckoutStore((state) => state.payment);
  const submitPayment = useCheckoutStore((state) => state.submitPayment);
  const [creditCardList, setCreditCardList] = useState<
    Record<string, Omit<NonNullable<CheckoutStore["payment"]>, "id">>
  >({});

  const handleCreditCardChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const paymentId = e.target.value;

    submitPayment({ id: paymentId, ...creditCardList[paymentId] });
  };

  const handleCreditCardSubmit = ({
    id,
    cardNumberLastFour,
  }: NonNullable<CheckoutStore["payment"]>) => {
    setCreditCardList((state) => ({ ...state, [id]: { cardNumberLastFour } }));
    submitPayment({ id, cardNumberLastFour });
  };

  return (
    <div className={styles.payment}>
      <h1 className={styles.title}>Payment</h1>
      <form onChange={handleCreditCardChange}>
        {Object.keys(creditCardList).map((paymentId) => (
          <InputRadio
            id={paymentId}
            value={paymentId}
            checked={payment?.id === paymentId}
          >
            {`**** **** **** ${creditCardList[paymentId].cardNumberLastFour}`}
          </InputRadio>
        ))}
      </form>
      <AddCreditCard onSubmit={handleCreditCardSubmit} />
    </div>
  );
}
