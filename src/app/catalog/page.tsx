import PageRoute from "@/components/PageRoute";
import Categories from "@/components/Categories";
import { oneProduct } from "@/data/products.data";
import styles from "./page.module.scss";
import PageProducts from "@/components/PageProducts/PageProducts";

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
    sort?: string;
  };
}

export default function CatalogPage({ searchParams }: Props) {
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className={`contentWrapper ${styles.container}`}>
      <PageRoute routes={["catalog"]} />
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
      <PageProducts
        products={getProducts(currentPage)}
        totalProducts={fakeProducts.length}
        currentPage={currentPage}
        totalPages={totalPages}
        className={styles.pageProducts}
      />
    </div>
  );
}
