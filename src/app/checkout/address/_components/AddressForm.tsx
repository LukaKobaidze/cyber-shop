"use client";
import AnimationInput from "@/components/AnimationInput";
import styles from "./AddressForm.module.scss";
import { useState } from "react";
import Button from "@/components/Button";
import CountryInput from "./Country/CountryInput";

interface Props {
  showAddressForm: boolean;
  setAddressSelect: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function AddressForm(props: Props) {
  // const []

  const { showAddressForm, setAddressSelect } = props;
  const [addressOptions, setAddressOptions] = useState("other");

  return (
    <div
      className={`content-wrapper ${styles.container} ${
        showAddressForm && styles.active
      }`}
    >
      <div className={styles.innerContainer}>
        <h2 className={styles.heading}>Add New Address</h2>
        <form>
          <div className={styles.first}>
            <AnimationInput
              className={styles.firstInput}
              label="Title"
              type="text"
              required
            />
            <div className={styles.addressOptions}>
              <h4>Select address type: </h4>

              <div className={styles.optionBox}>
                <span
                  className={addressOptions === "other" ? styles.active : ""}
                  onClick={() => setAddressOptions("other")}
                >
                  <input
                    type="radio"
                    name="other"
                    checked={addressOptions === "other"}
                    readOnly
                  />
                  Other
                </span>
                <span
                  className={addressOptions === "home" ? styles.active : ""}
                  onClick={() => setAddressOptions("home")}
                >
                  <input
                    type="radio"
                    name="home"
                    checked={addressOptions === "home"}
                    readOnly
                  />
                  Home
                </span>
                <span
                  className={addressOptions === "office" ? styles.active : ""}
                  onClick={() => setAddressOptions("office")}
                >
                  <input
                    type="radio"
                    name="office"
                    checked={addressOptions === "office"}
                    readOnly
                  />
                  Office
                </span>
              </div>
            </div>
          </div>
          <div className={styles.second}>
            <AnimationInput
              className={styles.secondInput}
              label="First Name"
              type="text"
              required
            />
            <AnimationInput
              className={styles.secondInput}
              label="Last Name"
              type="text"
              required
            />
          </div>
          <div className={styles.third}>
            <AnimationInput
              className={styles.thirdInput}
              label="Address Line 1"
              type="text"
              required
            />
            <AnimationInput
              className={styles.thirdInput}
              label="Address Line 2"
              type="text"
            />
          </div>
          <div className={styles.fourth}>
            <CountryInput />

            <AnimationInput
              className={styles.fourthInput}
              label="City"
              type="text"
              required
            />
          </div>
          <div className={styles.fifth}>
            <AnimationInput
              className={styles.fifthInput}
              label="ZIP Code"
              type="text"
              required
            />
            <AnimationInput
              className={styles.fifthInput}
              label="State"
              type="text"
              required
            />
          </div>

          <Button className={styles.submitButton} type="submit">
            Submit Address
          </Button>
        </form>
      </div>
    </div>
  );
}
