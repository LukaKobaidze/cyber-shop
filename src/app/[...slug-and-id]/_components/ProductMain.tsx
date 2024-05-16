"use client";
import Price from "@/components/Price";
import styles from "./ProductMain.module.scss";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";

interface Props {
  images: string[];
  title: string;
  price: number;
  salePercentage?: number;
  description: string;
}

export default function ProductMain(props: Props) {
  const { images, title, price, salePercentage, description } = props;

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
          salePercentage={salePercentage}
          className={styles.infoPrice}
        />
        <Paragraph className={styles.infoParagraph}>{description}</Paragraph>
        <div className={styles.buttonsWrapper}>
          <Button className={styles.addToCart}>Add to Cart</Button>
          <Button>Buy Now</Button>
        </div>
      </div>
    </div>
  );
}
