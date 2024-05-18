import Searchbar from "@/components/Searchbar";
import styles from "./WishlistSearchbar.module.scss";

interface Props {}

export default function WishlistSearchbar(props: Props) {
  return (
    <Searchbar
      classNameContainer={styles.searchbarContainer}
      placeholder="Search in Wishlist"
    />
  );
}
