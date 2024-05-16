"use client";

import { productsData } from "@/data/products.data";
import Image from "next/image";
import Counter from "@/components/Counter";
import styles from "./CartProducts.module.scss";
import { IconClose } from "@/icons";
import Tooltip from "@/components/Tooltip";
import Price from "@/components/Price";

interface Props {}

export default function CartProducts(props: Props) {
  return (
    <div className={styles.container}>
      {productsData.map((product) => (
        <div className={styles.product}>
          <div className={styles.productImageWrapper}>
            <Image src={product.image} alt="" fill sizes="10vw" />
          </div>
          <p className={styles.productTitle}>{product.title}</p>
          <Counter value={1} onDecrement={() => {}} onIncrement={() => {}} />
          <Price
            price={product.price}
            salePercentage={product.salePercentage}
            className={styles.productPrice}
          />
          <Tooltip position="bottom" text="Remove Product">
            <button
              className={styles.productRemove}
              aria-label="Remove Product"
            >
              <IconClose />
            </button>
          </Tooltip>
        </div>
      ))}
    </div>
  );
}
