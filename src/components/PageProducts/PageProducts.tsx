import { ProductType } from "@/data/products.data";
import Pagination from "../Pagination/Pagination";
import ProductCard from "../ProductCard";
import ProductsFilter from "../ProductsFilter";
import ProductsGrid from "../ProductsGrid";
import styles from "./PageProducts.module.scss";
import Select from "../Select";

interface Props {
  products: ProductType[];
  totalProducts: number;
  currentPage: number;
  totalPages: number;
  sortOptions: { label: string; value: string }[];
  textAmountProducts?: string;
  disableFilter?: boolean;
  className?: string;
}

export default function PageProducts(props: Props) {
  const {
    products,
    totalProducts,
    currentPage,
    totalPages,
    sortOptions,
    disableFilter,
    textAmountProducts,
    className,
  } = props;

  return (
    <div className={`${styles.container} ${className || ""}`}>
      {!disableFilter && <ProductsFilter />}
      <div className={styles.products}>
        <div className={styles.productsHeader}>
          <p className={styles.totalProducts}>
            {textAmountProducts || "Total Products"}:{" "}
            <span className={styles.totalProductsNumber}>{totalProducts}</span>
          </p>
          <Select>
            {sortOptions.map(({ value, label }) => (
              <option value={value}>{label}</option>
            ))}
          </Select>
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
              imageSizes="20vw"
            />
          ))}
        </ProductsGrid>
        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        )}
      </div>
    </div>
  );
}
