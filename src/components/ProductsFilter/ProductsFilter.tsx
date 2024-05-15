import Dropdown from "./Dropdown";
import PriceFilter from "./PriceFilter";
import styles from "./ProductsFilter.module.scss";

interface Props {}

export default function ProductsFilter(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.sticky}>
        <PriceFilter />
      </div>
    </div>
  );
}
