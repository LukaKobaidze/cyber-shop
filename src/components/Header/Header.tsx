"use client";

import Image from "next/image";
import Searchbar from "../Searchbar";
import Navigation from "../Navigation";
import Link from "next/link";
import {
  IconCart,
  IconWishlist,
  IconUser,
  IconWishlistFilled,
  IconCartFilled,
} from "@/icons";
import styles from "./Header.module.scss";
import Tooltip from "../Tooltip";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/stores/cart";
import Badge from "../Badge";

interface Props {}

export default function Header(props: Props) {
  const pathname = usePathname();

  const products = useCartStore((state) => state.products);

  const cartSize = Object.keys(products).length;

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
              {pathname === "/wishlist" ? (
                <IconWishlistFilled className={styles.lastGroupItemIcon} />
              ) : (
                <IconWishlist className={styles.lastGroupItemIcon} />
              )}
            </Link>
          </Tooltip>
          <Tooltip position="bottom" text="Cart" offset={8}>
            <Link
              href="/cart"
              aria-label="Cart"
              className={styles.lastGroupItem}
            >
              {!!cartSize && <Badge>{cartSize}</Badge>}
              {pathname === "/cart" ? (
                <IconCartFilled className={styles.lastGroupItemIcon} />
              ) : (
                <IconCart className={styles.lastGroupItemIcon} />
              )}
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
