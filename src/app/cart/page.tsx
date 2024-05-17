import CartProducts from "./_components/CartProducts";
import OrderSummary from "./_components/OrderSummary";
import styles from "./page.module.scss";

export default function CartPage() {
  return (
    <div className={`contentWrapper ${styles.container}`}>
      <div className={styles.products}>
        <h1 className={styles.heading}>Shopping Cart</h1>
        <CartProducts />
      </div>
      <OrderSummary />
    </div>
  );
}
