import styles from "./ProductsGrid.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function ProductsGrid(props: Props) {
  const { className, children, ...restProps } = props;

  return <div className={styles.productsGrid}>{children}</div>;
}
