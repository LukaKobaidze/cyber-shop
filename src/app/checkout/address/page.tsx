"use client";
import { useState } from "react";
import styles from "./Address.module.scss";
import Warning from "./_components/Warning";
import PlusButton from "./_components/PlusButton";
import AdddressForm from "./_components/AdddressForm";

interface Props {}

export default function AddressPage(props: Props) {
  // storing address forms inside this state
  const [addressSelect, setAddressSelect] = useState<any[]>([]);
  // showing the address form state
  const [showAddressForm, setShowAddressForm] = useState(false);

  return (
    <div className={styles.container}>
      <div className={`contentWrapper ${styles.contentWrapper}`}>
        <h3 className={styles.title}>
          {addressSelect.length === 0 ? "Create Address" : "Select Address"}
        </h3>

        <div className={styles.content}>
          <AdddressForm showAddressForm={showAddressForm} setAddressSelect={setAddressSelect} />
          <PlusButton showAddressForm={showAddressForm} setShowAddressForm = {setShowAddressForm}/>
          {addressSelect.length === 0 && <Warning />}
        </div>
      </div>
    </div>
  );
}
