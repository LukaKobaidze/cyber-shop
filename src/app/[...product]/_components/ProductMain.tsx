"use client";
import Price from "@/components/Price";
import styles from "./ProductMain.module.scss";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";
import { IconDelivery, IconGuaranteed, IconStock } from "@/icons";

interface Props {
  images: string[];
  title: string;
  price: number;
  priceDiscount?: number;
  description: string;
}

export default function ProductMain(props: Props) {
  const { images, title, price, priceDiscount, description } = props;

  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className={`contentWrapper ${styles.container}`}>
      <div className={styles.images}>
        <div className={styles.imagesAside}>
          {images.map((image, imageIndex) => (
            <button
              className={`${styles.imagesAsideButton} ${
                imageIndex === activeImage ? styles.active : ""
              }`}
              onMouseEnter={() => setActiveImage(imageIndex)}
              onClick={() => setActiveImage(imageIndex)}
            >
              <Image
                src={image}
                fill
                alt=""
                sizes="10vw"
                className={styles.image}
              />
            </button>
          ))}
        </div>
        <div className={styles.imagesMain}>
          <Image
            src={images[activeImage]}
            fill
            alt=""
            sizes="40vw"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.infoHeading}>{title}</h1>
        <Price
          price={price}
          priceDiscount={priceDiscount}
          className={styles.infoPrice}
        />
        <div className={styles.infoVariants}>
          <a href="/" className={styles.infoVariantsItem}>
            128GB
          </a>
          <a href="/" className={styles.infoVariantsItem}>
            256GB
          </a>
          <a href="/" className={styles.infoVariantsItem}>
            512GB
          </a>
          <a href="/" className={`${styles.infoVariantsItem} ${styles.active}`}>
            1TB
          </a>
        </div>
        <Paragraph className={styles.infoParagraph}>{description}</Paragraph>
        <div className={styles.buttonsWrapper}>
          <Button className={styles.addToCart}>Add to Cart</Button>
          <Button>Buy Now</Button>
        </div>
        <div className={styles.deliveryDetailsWrapper}>
          <div className={styles.deliveryDetail}>
            <div className={styles.deliveryDetailIconWrapper}>
              <IconDelivery />
            </div>
            <div className={styles.deliveryDetailTextWrapper}>
              <span className={styles.deliveryDetailTextName}>
                Free Delivery
              </span>
              <span className={styles.deliveryDetailTextValue}>1-2 day</span>
            </div>
          </div>
          <div className={styles.deliveryDetail}>
            <div className={styles.deliveryDetailIconWrapper}>
              <IconStock />
            </div>
            <div className={styles.deliveryDetailTextWrapper}>
              <span className={styles.deliveryDetailTextName}>In Stock</span>
              <span className={styles.deliveryDetailTextValue}>Today</span>
            </div>
          </div>
          <div className={styles.deliveryDetail}>
            <div className={styles.deliveryDetailIconWrapper}>
              <IconGuaranteed />
            </div>
            <div className={styles.deliveryDetailTextWrapper}>
              <span className={styles.deliveryDetailTextName}>Guaranteed</span>
              <span className={styles.deliveryDetailTextValue}>1 year</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
