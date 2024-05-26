"use client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { IconArrowDown } from "@/icons";
import Button from "@/components/Button";
import styles from "./page.module.scss";
import InputRadio from "@/components/InputRadio";

type ShipmentMethodType = "free" | "asap" | "schedule";

export default function ShippingPage() {
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
  const [shipmentMethod, setShipmentMethod] =
    useState<ShipmentMethodType>("free");
  const [selectedTime, setSelectedTime] = useState<string>(
    freeDeliveryDateString,
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDatePicker(date);
  };

  // storing the time inside selected time based on the chooosen option
  useEffect(() => {
    if (shipmentMethod === "schedule" && selectedDatePicker) {
      setSelectedTime(
        selectedDatePicker.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }),
      );
    }
  }, [selectedDatePicker]);

  const handleInputRadioChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const shipmentMethod: ShipmentMethodType = e.target.value;

    setShipmentMethod(shipmentMethod);

    if (shipmentMethod === "free") {
      setSelectedTime(freeDeliveryDateString);
    } else if (shipmentMethod === "asap") {
      setSelectedTime(soonDeliveryDateString);
    } else if (shipmentMethod === "schedule" && selectedDatePicker) {
      setSelectedTime(
        selectedDatePicker.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
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

        <form
          className={styles.shipmentMethodsWrapper}
          onChange={handleInputRadioChange}
        >
          <InputRadio
            classNameContainer={styles.shippingOption}
            id="shipping-free"
            checked={shipmentMethod === "free"}
            value="free"
          >
            <div className={styles.inputRadioContent}>
              <div className={styles.inputRadioContentLeft}>
                <p className={styles.inputRadioContentLabel}>Free</p>
                <p className={styles.inputRadioContentDescription}>
                  Regular shipment
                </p>
              </div>
              <p>{freeDeliveryDateString}</p>
            </div>
          </InputRadio>
          <InputRadio
            classNameContainer={styles.shippingOption}
            id="shipping-asap"
            checked={shipmentMethod === "asap"}
            value="asap"
          >
            <div className={styles.inputRadioContent}>
              <div className={styles.inputRadioContentLeft}>
                <p className={styles.inputRadioContentLabel}>$8.50</p>
                <p className={styles.inputRadioContentDescription}>
                  Get your delivery as soon as possible
                </p>
              </div>
              <p>{soonDeliveryDateString}</p>
            </div>
          </InputRadio>
          <InputRadio
            classNameContainer={styles.shippingOption}
            id="shipping-schedule"
            checked={shipmentMethod === "schedule"}
            value="schedule"
          >
            <div className={styles.inputRadioContent}>
              <div className={styles.inputRadioContentLeft}>
                <p className={styles.inputRadioContentLabel}>Schedule</p>
                <p className={styles.inputRadioContentDescription}>
                  Pick a date when you want to get your delivery
                </p>
              </div>
              <div className={styles.datePickerWrapper}>
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
          </InputRadio>
        </form>
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
