"use client";

import Image from "next/image";
import Button from "../Button";
import { IconWishlist, IconWishlistFilled } from "@/icons";
import Tooltip from "../Tooltip";
import Link from "next/link";
import styles from "./ProductCard.module.scss";

interface Props {
  link: string;
  image: string;
  title: string;
  price: number;
  imageSizes: string;
  wishlist: boolean;
  onToggleWishlist: () => void;
}

export default function ProductCard(props: Props) {
  const { link, image, title, price, imageSizes, wishlist, onToggleWishlist } =
    props;

  const tooltipText = wishlist ? "Remove from Wishlist" : "Add to Wishlist";

  return (
    <div className={`card ${styles.container}`}>
      <Link href={link} className={styles.imageWrapper} tabIndex={-1}>
        <Image
          src={image}
          fill
          sizes={imageSizes}
          alt={"Image of " + title}
          className={styles.image}
        />
      </Link>
      <Link href={link} className={styles.title}>
        {title}
      </Link>
      <span className={styles.price}>${price}</span>
      <Button className={styles.buyNowButton}>Buy Now</Button>
      <Tooltip position="top" text={tooltipText}>
        <button
          aria-label={tooltipText}
          className={styles.wishlistButton}
          onClick={() => onToggleWishlist()}
        >
          {wishlist ? (
            <IconWishlistFilled className={styles.wishlistButtonIcon} />
          ) : (
            <IconWishlist className={styles.wishlistButtonIcon} />
          )}
        </button>
      </Tooltip>
    </div>
  );
}
