"use client";
import ProductCard from "@/components/ProductCard";
import styles from "./Discounts.module.scss";
import { oneProduct } from "@/data/products.data";
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
            id={product.id}
            slug={product.slug}
            title={product.title}
            image={product.image}
            price={product.price}
            wishlist={false}
            imageSizes="20vw"
            onToggleWishlist={() => {}}
          />
        ))}
      </ProductsGrid>
    </div>
  );
}
