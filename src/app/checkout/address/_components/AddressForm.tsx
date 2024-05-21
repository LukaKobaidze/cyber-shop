"use client";
import AnimationInput from "@/components/AnimationInput";
import styles from "./AddressForm.module.scss";
import { useState } from "react";
import Button from "@/components/Button";
import CountryInput from "./Country/CountryInput";
import useInputFields from "@/hooks/useInputFields";

interface Props {
  showAddressForm: boolean;
  setAddressSelect: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function AddressForm(props: Props) {
  const { showAddressForm, setAddressSelect } = props;
  const [addressOptions, setAddressOptions] = useState("other");
  const { fields, error, onFieldUpdate, setError, validateEmpty } =
    useInputFields([
      "firstName",
      "lastName",
      "addressLine1",
      "addressLine2",
      "country",
      "city",
      "state",
      "zipCode",
    ]);

  return (
    <div
      className={`content-wrapper ${styles.container} ${
        showAddressForm && styles.active
      }`}
    >
      <div className={styles.innerContainer}>
        <form>
          <h2 className={styles.heading}>Add New Address</h2>
          <div className={styles.addressOptions}>
            <h4>Select address type: </h4>

            <div className={styles.optionBox}>
              <span
                className={addressOptions === "other" ? styles.active : ""}
                onClick={() => setAddressOptions("other")}
              >
                <input
                  type="radio"
                  name="address-type"
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
                  name="address-type"
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
                  name="address-type"
                  checked={addressOptions === "office"}
                  readOnly
                />
                Office
              </span>
            </div>
          </div>
          <div className={styles.second}>
            <AnimationInput
              className={styles.secondInput}
              placeholder="First Name"
              type="text"
              value={fields.firstName}
              onChange={(e) => onFieldUpdate(e.target.value, "firstName")}
              required
            />
            <AnimationInput
              className={styles.secondInput}
              placeholder="Last Name"
              type="text"
              value={fields.lastName}
              onChange={(e) => onFieldUpdate(e.target.value, "lastName")}
              required
            />
          </div>
          <div className={styles.third}>
            <AnimationInput
              className={styles.thirdInput}
              placeholder="Address Line 1"
              type="text"
              value={fields.addressLine1}
              onChange={(e) => onFieldUpdate(e.target.value, "addressLine1")}
              required
            />
            <AnimationInput
              className={styles.thirdInput}
              placeholder="Address Line 2"
              value={fields.addressLine2}
              onChange={(e) => onFieldUpdate(e.target.value, "addressLine2")}
              type="text"
            />
          </div>
          <div className={styles.fourth}>
            <CountryInput
              value={fields.country}
              onValueChange={(value) => onFieldUpdate(value, "country")}
            />

            <AnimationInput
              className={styles.fourthInput}
              placeholder="City"
              type="text"
              value={fields.city}
              onChange={(e) => onFieldUpdate(e.target.value, "city")}
              required
            />
          </div>
          <div className={styles.fifth}>
            <AnimationInput
              className={styles.fifthInput}
              placeholder="ZIP Code"
              type="text"
              value={fields.zipCode}
              onChange={(e) => onFieldUpdate(e.target.value, "zipCode")}
              required
            />
            <AnimationInput
              className={styles.fifthInput}
              placeholder="State"
              type="text"
              value={fields.state}
              onChange={(e) => onFieldUpdate(e.target.value, "state")}
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
