import styles from "./Price.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  price: number;
  priceDiscount?: number;
}

export default function Price(props: Props) {
  const { price, priceDiscount, className, ...restProps } = props;

  const renderPrice = priceDiscount
    ? price - (price * priceDiscount) / 100
    : price;

  return (
    <div className={`${styles.priceWrapper} ${className}`} {...restProps}>
      <span className={styles.price}>${renderPrice}</span>

      {priceDiscount && (
        <span className={styles.priceBeforeSale}>${price}</span>
      )}
    </div>
  );
}
