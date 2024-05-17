import ProductsGrid from "@/components/ProductsGrid";
import styles from "./RelatedProducts.module.scss";
import { productsData } from "@/data/products.data";
import ProductCard from "@/components/ProductCard";

interface Props {}

export default function RelatedProducts(props: Props) {
  return (
    <div className={`contentWrapper ${styles.container}`}>
      <h2 className={styles.heading}>Related Products</h2>
      <ProductsGrid>
        {productsData.slice(0, 4).map((product) => (
          <ProductCard
            id={product.id}
            slug={product.slug}
            image={product.image}
            imageSizes="20vw"
            wishlist={false}
            title={product.title}
            price={product.price}
            salePercentage={product.salePercentage}
          />
        ))}
      </ProductsGrid>
    </div>
  );
}
