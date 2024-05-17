import Button from "@/components/Button";
import styles from "./OrderSummary.module.scss";
import Input from "@/components/Input";

interface Props {}

export default function OrderSummary(props: Props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Order Summary</h2>
      <label htmlFor="discount-code" className={styles.inputLabel}>
        Discount code / Promo code
      </label>
      <Input id="discount-code" className={styles.input} placeholder="Code" />
      <div className={styles.keyValue}>
        <span>Subtotal</span>
        <span>$2347</span>
      </div>
      <Button asLink href="/checkout/address" className={styles.checkoutButton}>
        Checkout
      </Button>
    </div>
  );
}
