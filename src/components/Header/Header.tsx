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
import { useWishlistStore } from "@/stores/wishlist";
import { countCartProducts } from "@/utils";

interface Props {}

export default function Header(props: Props) {
  const pathname = usePathname();

  const cartProducts = useCartStore((state) => state.products);
  const wishlistProducts = useWishlistStore((state) => state.products);

  const cartProductsLength = countCartProducts(cartProducts);
  const wishlistProductLength = Object.keys(wishlistProducts).length;

  return (
    <header className={styles.header}>
      <div className={`content-wrapper ${styles.contentWrapper}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="" width={65} height={23} />
        </Link>
        <Searchbar placeholder="Search" classNameContainer={styles.searchbar} />
        <Navigation />
        <div className={styles.lastGroup}>
          <Tooltip position="bottom" text="Wishlist" offset={8}>
            <Link
              href="/wishlist"
              aria-label="wishlist"
              className={styles.lastGroupItem}
            >
              {!!wishlistProductLength && (
                <Badge>{wishlistProductLength}</Badge>
              )}
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
              {!!cartProductsLength && <Badge>{cartProductsLength}</Badge>}
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
