"use client";

import Image from "next/image";
import Button from "../Button";
import { IconWishlist, IconWishlistFilled } from "@/icons";
import Tooltip from "../Tooltip";
import Link from "next/link";
import styles from "./ProductCard.module.scss";
import Price from "../Price";
import { useCartStore } from "@/stores/cart";
import { useWishlistStore } from "@/stores/wishlist";

interface Props {
  id: string;
  slug: string;
  image: string;
  title: string;
  price: number;
  imageSizes: string;
  priceDiscount?: number;
}

export default function ProductCard(props: Props) {
  const { id, slug, image, title, price, imageSizes, priceDiscount } = props;

  const wishlistProducts = useWishlistStore((state) => state.products);

  const addToCart = useCartStore((state) => state.addToCart);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );

  const isWishlist = wishlistProducts.hasOwnProperty(id);

  const tooltipText = isWishlist ? "Remove from Wishlist" : "Add to Wishlist";

  const href = "/" + slug + "/" + id;

  return (
    <div className={`card ${styles.container}`}>
      <Link href={href} className={styles.imageWrapper} tabIndex={-1}>
        <Image
          src={image}
          fill
          sizes={imageSizes}
          alt={"Image of " + title}
          className={styles.image}
        />
      </Link>
      <Link href={href} className={styles.title}>
        {title}
      </Link>
      <Price
        price={price}
        priceDiscount={priceDiscount}
        className={styles.price}
      />
      <Button
        className={styles.buyNowButton}
        onClick={() =>
          addToCart({
            id,
            slug,
            image,
            title,
            price,
            priceDiscount,
            quantity: 1,
          })
        }
      >
        Add to Cart
      </Button>
      <Tooltip position="top" text={tooltipText}>
        <button
          aria-label={tooltipText}
          className={`${styles.wishlistButton} ${
            isWishlist ? styles.active : ""
          }`}
          onClick={() =>
            isWishlist
              ? removeFromWishlist(id)
              : addToWishlist({ id, image, price, priceDiscount, slug, title })
          }
        >
          {isWishlist ? (
            <IconWishlistFilled className={styles.wishlistButtonIcon} />
          ) : (
            <IconWishlist className={styles.wishlistButtonIcon} />
          )}
        </button>
      </Tooltip>
    </div>
  );
}
