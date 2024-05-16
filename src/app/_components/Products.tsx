"use client";

import { useState } from "react";
import styles from "./Products.module.scss";
import { productsData } from "@/data/products.data";
import ProductCard from "@/components/ProductCard";
import ProductsGrid from "@/components/ProductsGrid";

const tabs = ["New Arrival", "Bestseller", "Featured Products"] as const;

interface Props {}

export default function Products(props: Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`contentWrapper ${styles.container}`}>
      <div className={styles.tabsWrapper}>
        {tabs.map((tabName, tabIndex) => (
          <button
            onClick={() => setActiveTab(tabIndex)}
            className={`${styles.tab} ${
              activeTab === tabIndex ? styles.active : ""
            }`}
          >
            {tabName}
          </button>
        ))}
      </div>

      <ProductsGrid>
        {productsData.map((product) => (
          <ProductCard
            id={product.id}
            slug={product.slug}
            image={product.image}
            title={product.title}
            price={product.price}
            wishlist={false}
            imageSizes="10vw"
            onToggleWishlist={() => {}}
          />
        ))}
      </ProductsGrid>
    </div>
  );
}
