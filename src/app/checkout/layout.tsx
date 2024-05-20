import { CheckoutStoreProvider } from "@/stores/checkout";
import Steps from "./_components/Steps";
import styles from "./layout.module.scss";

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CheckoutStoreProvider>
      <div className={styles.container}>
        <Steps />
        {children}
      </div>
    </CheckoutStoreProvider>
  );
}
