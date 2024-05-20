import CartProducts from "./_components/CartProducts";
import OrderSummary from "./_components/OrderSummary";
import styles from "./page.module.scss";

export default function CartPage() {
  return (
    <div className={`content-wrapper ${styles.container}`}>
      <CartProducts />
      <OrderSummary />
    </div>
  );
}
