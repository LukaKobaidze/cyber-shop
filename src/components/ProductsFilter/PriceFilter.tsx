"use client";

import { useState } from "react";
import Dropdown from "./Dropdown";
import styles from "./PriceFilter.module.scss";
import { IconDollarSign } from "@/icons";
import Button from "../Button";

interface Props {}

export default function PriceFilter(props: Props) {
  const [priceRange, setPriceRange] = useState({ from: "", to: "" });

  const handlePriceRangeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof priceRange,
  ) => {
    const value = e.target.value;

    if (value.length !== 0 && !/^\d+$/.test(value)) return;

    setPriceRange((state) => ({ ...state, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Dropdown label="Price" expandedInitially>
      <form onSubmit={handleSubmit}>
        <div className={styles.priceInputs}>
          <div className={styles.inputWrapper}>
            <IconDollarSign
              className={`${styles.dollarIcon} ${styles.dollarIconFrom}`}
              viewBox="0 0 24 24"
            />
            <input
              className={`${styles.input} ${styles.inputFrom}`}
              placeholder="From"
              value={priceRange.from}
              onChange={(e) => handlePriceRangeChange(e, "from")}
            />
          </div>
          <div className={styles.inputWrapper}>
            <input
              className={`${styles.input} ${styles.inputTo}`}
              placeholder="To"
              value={priceRange.to}
              onChange={(e) => handlePriceRangeChange(e, "to")}
            />
            <IconDollarSign
              className={`${styles.dollarIcon} ${styles.dollarIconTo}`}
              viewBox="0 0 24 24"
            />
          </div>
        </div>
        <Button type="submit" className={styles.submitButton}>
          Apply
        </Button>
      </form>
    </Dropdown>
  );
}
