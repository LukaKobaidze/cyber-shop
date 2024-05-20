"use client";
import styles from "./PlusButton.module.scss";

interface Props {
  showAddressForm: boolean;
  setShowAddressForm: (show: boolean) => void;
}

export default function PlusButton(props: Props) {
  const { showAddressForm, setShowAddressForm } = props;

  return (
    <div className={`content-wrapper ${styles.container}`}>
      <div className={styles.buttonWrapper}>
        <button onClick={() => setShowAddressForm(!showAddressForm)}>
          {showAddressForm ? "-" : "+"}
        </button>
        <span></span>
      </div>

      <p>Add New Address</p>
    </div>
  );
}
