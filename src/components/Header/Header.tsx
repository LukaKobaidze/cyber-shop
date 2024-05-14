import Image from "next/image";
import Searchbar from "../Searchbar";
import Navigation from "../Navigation";
import Link from "next/link";
import { IconCart, IconWishlist, IconUser } from "@/icons";
import styles from "./Header.module.scss";
import Tooltip from "../Tooltip";

interface Props {}

export default function Header(props: Props) {
  return (
    <header className={styles.header}>
      <div className={`contentWrapper ${styles.contentWrapper}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="" width={65} height={23} />
        </Link>
        <Searchbar classNameContainer={styles.searchbar} />
        <Navigation />
        <div className={styles.lastGroup}>
          <Tooltip position="bottom" text="Wishlist" offset={8}>
            <Link
              href="/wishlist"
              aria-label="wishlist"
              className={styles.lastGroupItem}
            >
              <IconWishlist className={styles.lastGroupItemIcon} />
            </Link>
          </Tooltip>
          <Tooltip position="bottom" text="Cart" offset={8}>
            <Link
              href="/cart"
              aria-label="Cart"
              className={styles.lastGroupItem}
            >
              <IconCart className={styles.lastGroupItemIcon} />
            </Link>
          </Tooltip>
          <Tooltip position="bottom" text="Sign In" offset={8}>
            <Link
              href="/create-account"
              aria-label="Sign In"
              className={styles.lastGroupItem}
            >
              <IconUser className={styles.lastGroupItemIcon} />
            </Link>
          </Tooltip>
        </div>
      </div>
    </header>
  );
}
