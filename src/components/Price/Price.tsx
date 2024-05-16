import styles from "./Price.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  price: number;
  salePercentage?: number;
}

export default function Price(props: Props) {
  const { price, salePercentage, className, ...restProps } = props;

  const renderPrice = salePercentage
    ? price - (price * salePercentage) / 100
    : price;

  return (
    <div className={`${styles.priceWrapper} ${className}`} {...restProps}>
      <span className={styles.price}>${renderPrice}</span>

      {salePercentage && (
        <span className={styles.priceBeforeSale}>${price}</span>
      )}
    </div>
  );
}
