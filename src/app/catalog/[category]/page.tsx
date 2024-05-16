import PageRoute from "@/components/PageRoute";
import styles from "./page.module.scss";
import PageProducts from "@/components/PageProducts/PageProducts";
import { oneProduct } from "@/data/products.data";

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
  params: {
    category: string;
  };
  searchParams?: {
    page?: string;
    sort?: string;
  };
}

export default function CatalogCategoryPage({ params, searchParams }: Props) {
  const category = params.category;
  const currentPage = Number(searchParams?.page) || 1;
  const sort = searchParams?.sort || "relevance";

  return (
    <div className={`contentWrapper ${styles.container}`}>
      <PageRoute routes={["catalog", category]} />
      <PageProducts
        currentPage={currentPage}
        products={getProducts(currentPage)}
        totalPages={totalPages}
        totalProducts={fakeProducts.length}
      />
    </div>
  );
}
