"use client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { IconArrowDown } from "@/icons";
import Button from "@/components/Button";
import styles from "./page.module.scss";

interface Props {}

export default function ShippingPage(props: Props) {
  // Calculate the delivery date for free
  const today = new Date();
  const threeWeeksLater = new Date(today.getTime() + 21 * 24 * 60 * 60 * 1000);
  const freeDeliveryDateString = threeWeeksLater.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  // Calculate the delivery date for expedited shipping (five days later)
  const fiveDaysLater = new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000);
  const soonDeliveryDateString = fiveDaysLater.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  // Calculate one year from today for date picker
  const oneYearLater = new Date(today);
  oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);

  const [selectedDatePicker, setSelectedDatePicker] = useState<Date | null>(
    null,
  );
  const [selectedOption, setSelectedOption] = useState<string>("free");
  const [selectedTime, setSelectedTime] = useState<string>(
    freeDeliveryDateString,
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDatePicker(date);
  };

  // storing the time inside selected time based on the chooosen option
  useEffect(() => {
    if (selectedOption === "schedule" && selectedDatePicker) {
      setSelectedTime(
        selectedDatePicker.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }),
      );
    }
  }, [selectedDatePicker]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (option === "free") {
      setSelectedTime(freeDeliveryDateString);
    } else if (option === "expedited") {
      setSelectedTime(soonDeliveryDateString);
    } else if (option === "schedule" && selectedDatePicker) {
      setSelectedTime(
        selectedDatePicker.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          // day: "2-digit",
        }),
      );
    } else {
      setSelectedTime("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={`content-wrapper ${styles.contentWrapper}`}>
        <h3 className={styles.title}>Shipment Method</h3>

        <div className={styles.content}>
          <div
            className={`${styles.shippingOption} ${
              selectedOption === "free" && styles.selected
            }`}
            onClick={() => handleOptionClick("free")}
          >
            <div className={styles.left}>
              <input
                type="radio"
                name="shipping"
                checked={selectedOption === "free"}
                readOnly
              />
              <h4>Free</h4>
              <p>Regular shipment</p>
            </div>
            <div className={styles.right}>
              <p>{freeDeliveryDateString}</p>
            </div>
          </div>

          <div
            className={`${styles.shippingOption} ${
              selectedOption === "expedited" && styles.selected
            }`}
            onClick={() => handleOptionClick("expedited")}
          >
            <div className={styles.left}>
              <input
                type="radio"
                name="shipping"
                checked={selectedOption === "expedited"}
                readOnly
              />
              <h4>$8.50</h4>
              <p>Get your delivery as soon as possible</p>
            </div>
            <div className={styles.right}>
              <p>{soonDeliveryDateString}</p>
            </div>
          </div>

          <div
            className={`${styles.shippingOption} ${
              selectedOption === "schedule" && styles.selected
            }`}
            onClick={() => handleOptionClick("schedule")}
          >
            <div className={styles.left}>
              <input
                type="radio"
                name="shipping"
                checked={selectedOption === "schedule"}
                readOnly
              />
              <h4>Schedule</h4>
              <p>Pick a date when you want to get your delivery</p>
            </div>
            <div className={styles.right}>
              <DatePicker
                selected={selectedDatePicker}
                onChange={handleDateChange}
                minDate={today}
                maxDate={oneYearLater}
                dateFormat="MMMM dd, yyyy"
                placeholderText="Select Date"
              />
              <IconArrowDown />
            </div>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <p className={styles.selectedTime}>{selectedTime}</p>
          <div className={styles.buttonBox}>
            <Button>Back</Button>
            <Button>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
