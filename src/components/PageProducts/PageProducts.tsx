import { ProductType } from "@/app/_components/products.data";
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
    <div className={`${styles.container} ${className || ''}`}>
      <ProductsFilter />
      <div className={styles.products}>
        <div className={styles.productsHeader}>
          <p>
            Total Products: <span>{totalProducts}</span>
          </p>
          <ProductsSort />
        </div>
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard
              title={product.title}
              link={product.link}
              image={product.image}
              price={product.price}
              wishlist={false}
              imageSizes="20vw"
            />
          ))}
        </ProductsGrid>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}
