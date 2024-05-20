"use client";
import { useState } from "react";
import Warning from "./_components/Warning";
import PlusButton from "./_components/PlusButton";
import AddressForm from "./_components/AddressForm";
import styles from "./page.module.scss";

interface Props {}

export default function AddressPage(props: Props) {
  // storing address forms inside this state
  const [addressSelect, setAddressSelect] = useState<any[]>([]);
  // showing the address form state
  const [showAddressForm, setShowAddressForm] = useState(false);

  return (
    <div className={`content-wrapper ${styles.container}`}>
      <h1 className={styles.title}>Select Address</h1>

      <div className={styles.content}>
        <AddressForm
          showAddressForm={showAddressForm}
          setAddressSelect={setAddressSelect}
        />
        <PlusButton
          showAddressForm={showAddressForm}
          setShowAddressForm={setShowAddressForm}
        />
        {addressSelect.length === 0 && <Warning />}
      </div>
    </div>
  );
}
