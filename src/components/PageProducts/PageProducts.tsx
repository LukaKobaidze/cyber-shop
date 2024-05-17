import { ProductType } from "@/data/products.data";
import Pagination from "../Pagination/Pagination";
import ProductCard from "../ProductCard";
import ProductsFilter from "../ProductsFilter";
import ProductsGrid from "../ProductsGrid";
import ProductsSort from "../ProductsSort/ProductsSort";
import styles from "./PageProducts.module.scss";

interface Props {
  products: ProductType[];
  totalProducts: number;
  currentPage: number;
  totalPages: number;
  className?: string;
}

export default function PageProducts(props: Props) {
  const { products, totalProducts, currentPage, totalPages, className } = props;

  return (
    <div className={`${styles.container} ${className || ""}`}>
      <ProductsFilter />
      <div className={styles.products}>
        <div className={styles.productsHeader}>
          <p className={styles.totalProducts}>
            Total Products:{" "}
            <span className={styles.totalProductsNumber}>{totalProducts}</span>
          </p>
          <ProductsSort />
        </div>
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard
              id={product.id}
              slug={product.slug}
              title={product.title}
              image={product.image}
              price={product.price}
              priceDiscount={product.priceDiscount}
              wishlist={true}
              imageSizes="20vw"
            />
          ))}
        </ProductsGrid>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}
