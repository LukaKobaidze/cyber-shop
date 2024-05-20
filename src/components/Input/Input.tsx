"use client";
import styles from "./Input.module.scss";
import { useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  maxLength?: number;
  addCard?: boolean;
  allowNumbers?: boolean;
  upperCase?: boolean;
  expDate?: boolean;
}

export default function Input(props: Props) {
  const {
    onChange,
    className,
    maxLength,
    addCard,
    allowNumbers,
    upperCase,
    expDate,
    ...restProps
  } = props;
  const isRequired = restProps.required;
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    // if theres going to be on change
    if (onChange) {
      onChange(e); // Call the provided onChange function with the input value
    }

    // logic for exp.date
    if (expDate) {
      
      // Ensure the first digit is 0 or 1
      if (value.length >= 1 && !['0', '1'].includes(value[0])) {
        value = '';
      }

      // Limit the month to 2 digits
      if (value.length > 1 && value.slice(0, 2) > '12') {
        value = value.slice(0, 1);
      }

      // Add '/' after the month
      if (value.length > 2) {
        value = value.replace(/\//g, "");
        value = value.match(/.{1,2}/g)?.join("/") || value;
      }
    }

    // value will be only in upper case
    if (upperCase) {
      value = value.toUpperCase();
    }

    // allow only numbers
    if (allowNumbers) {
      value = value.replace(/\D/g, "");
    }
    // logic for cards
    if (addCard) {
      // Remove all spaces
      value = value.replace(/\s/g, "");
      // Add spaces after every 4 characters
      value = value.match(/.{1,4}/g)?.join("   ") || value;
    }

    setInputValue(value);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <input
      className={`${styles.input} ${className || ""}`}
      value={inputValue}
      maxLength={maxLength}
      onChange={handleChange}
      {...restProps}
    />
  );
}
