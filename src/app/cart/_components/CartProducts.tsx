"use client";

import Image from "next/image";
import { useCartStore } from "@/stores/cart";
import Price from "@/components/Price";
import Counter from "@/components/Counter";
import { IconClose } from "@/icons";
import Tooltip from "@/components/Tooltip";
import styles from "./CartProducts.module.scss";
import Link from "next/link";
import Paragraph from "@/components/Paragraph";

interface Props {}

export default function CartProducts(props: Props) {
  const products = useCartStore((state) => state.products);

  const productsLength = Object.keys(products).length;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Shopping Cart</h1>
      <span className={styles.amountItemsText}>
        {productsLength ? `(${productsLength} item${productsLength === 1 ? "" : "s"})` : ""}
      </span>

      {(Object.keys(products) as (keyof typeof products)[])
        .sort(
          (a, b) =>
            products[a].dateAdded.getTime() - products[b].dateAdded.getTime()
        )
        .map((id) => {
          const { slug, title, image, quantity, price, priceDiscount } =
            products[id];

          const linkHref = `/${slug}/${id}`;
          return (
            <div className={styles.product}>
              <Link
                href={linkHref}
                className={styles.productImageWrapper}
                tabIndex={-1}
              >
                <Image src={image} alt="" fill sizes="10vw" />
              </Link>
              <Link href={linkHref} className={styles.productTitle}>
                {title}
              </Link>
              <Counter
                value={quantity}
                onDecrement={() => {}}
                onIncrement={() => {}}
              />
              <Price
                price={price}
                priceDiscount={priceDiscount}
                className={styles.productPrice}
              />
              <Tooltip position="top" text="Remove Product" offset={10}>
                <button
                  className={styles.productRemove}
                  aria-label="Remove Product"
                >
                  <IconClose />
                </button>
              </Tooltip>
            </div>
          );
        })}
    </div>
  );
}
