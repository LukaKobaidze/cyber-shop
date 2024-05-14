"use client";
import ProductCard from "@/components/ProductCard";
import styles from "./Discounts.module.scss";
import { oneProduct } from "./products.data";
import ProductsGrid from "@/components/ProductsGrid";

const fakeData = [oneProduct, oneProduct, oneProduct, oneProduct];

interface Props {}

export default function Discounts(props: Props) {
  return (
    <div className={`contentWrapper ${styles.container}`}>
      <h2 className={styles.heading}>Discounts up to -50%</h2>
      <ProductsGrid>
        {fakeData.map((product) => (
          <ProductCard
            link={product.link}
            title={product.title}
            image={product.image}
            price={product.price}
            wishlist={false}
            imageSizes="20vw"
            onToggleWishlist={() => {
              console.log("toggle");
            }}
          />
        ))}
      </ProductsGrid>
    </div>
  );
}
