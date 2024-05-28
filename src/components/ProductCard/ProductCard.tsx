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

export interface ProductCardProps {
  id: string;
  slug: string;
  images: string[];
  title: string;
  price: number;
  imageSizes: string;
  priceDiscount?: number;
}

export default function ProductCard(props: ProductCardProps) {
  const { id, slug, images, title, price, imageSizes, priceDiscount } = props;

  const cartProducts = useCartStore((state) => state.products);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const wishlistProducts = useWishlistStore((state) => state.products);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist,
  );

  const quantityInCart = cartProducts[id]?.quantity || 0;
  const isInWishlist = wishlistProducts.hasOwnProperty(id);

  const tooltipText = isInWishlist ? "Remove from Wishlist" : "Add to Wishlist";

  const href = "/" + slug + "/" + id;

  return (
    <div className={`card ${styles.container}`}>
      <Link href={href} className={styles.imageWrapper} tabIndex={-1}>
        <Image
          src={images[0]}
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
        className={styles.addToCartButton}
        onClick={() => addToCart(id)}
      >
        Add to Cart
      </Button>
      {!!quantityInCart && (
        <div className={styles.quantityInCart}>
          <span>{quantityInCart} in cart - </span>
          <button
            className={styles.quantityInCartButton}
            onClick={() => removeFromCart(id)}
          >
            Remove
          </button>
        </div>
      )}

      <Tooltip position="top" text={tooltipText}>
        <button
          aria-label={tooltipText}
          className={`${styles.wishlistButton} ${
            isInWishlist ? styles.active : ""
          }`}
          onClick={() =>
            isInWishlist ? removeFromWishlist(id) : addToWishlist(id)
          }
        >
          {isInWishlist ? (
            <IconWishlistFilled className={styles.wishlistButtonIcon} />
          ) : (
            <IconWishlist className={styles.wishlistButtonIcon} />
          )}
        </button>
      </Tooltip>
    </div>
  );
}
