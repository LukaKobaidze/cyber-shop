import WishlistProducts from "./_components/WishlistProducts";
import WishlistSearchbar from "./_components/WishlistSearchbar";
import styles from "./page.module.scss";

interface Props {}

export default function WishlistPage(props: Props) {
  return (
    <div className={`content-wrapper ${styles.container}`}>
      <WishlistSearchbar />
      <WishlistProducts />
    </div>
  );
}
