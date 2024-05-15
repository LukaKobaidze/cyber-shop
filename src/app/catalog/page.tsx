import PageRoute from "@/components/PageRoute";
import Categories from "@/components/Categories";
import ProductsGrid from "@/components/ProductsGrid";
import ProductsFilter from "@/components/ProductsFilter";
import ProductCard from "@/components/ProductCard";
import Select from "@/components/Select";
import Pagination from "@/components/Pagination/Pagination";
import { oneProduct } from "../_components/products.data";
import styles from "./page.module.scss";

const fakeProducts = Array.from({ length: 85 }).map(() => oneProduct);
const totalAmount = fakeProducts.length;
const pageLimit = 9;
const totalPages = Math.ceil(totalAmount / pageLimit);
const getProducts = (currentPage: number) => {
  return fakeProducts.slice(
    pageLimit * (currentPage - 1),
    pageLimit * (currentPage - 1) + pageLimit
  );
};

interface Props {
  searchParams?: {
    page?: string;
  };
}

export default function CatalogPage({ searchParams }: Props) {
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className={`contentWrapper ${styles.container}`}>
      <PageRoute />
      <Categories
        categoriesArr={[
          "/phones",
          "/smart-watches",
          "/cameras",
          "/headphones",
          "/computers",
          "/gaming",
        ]}
      />
      <div className={styles.productsAndFilter}>
        <ProductsFilter />
        <div className={styles.products}>
          <div className={styles.productsHeader}>
            <p>
              Total Products: <span>{totalAmount}</span>
            </p>
            <Select>
              <option>Relevance</option>
              <option>Price (Low to High)</option>
              <option>Price (High to Low)</option>
              <option>Rating (Low to High)</option>
              <option>Rating (High to Low)</option>
            </Select>
          </div>
          <ProductsGrid>
            {getProducts(currentPage).map((product) => (
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
    </div>
  );
}
