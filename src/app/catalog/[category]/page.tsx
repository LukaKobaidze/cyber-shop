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
    pageLimit * (currentPage - 1) + pageLimit,
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
    <div className={`content-wrapper ${styles.container}`}>
      <PageRoute routes={["catalog", category]} />
      <PageProducts
        currentPage={currentPage}
        products={getProducts(currentPage)}
        totalPages={totalPages}
        totalProducts={fakeProducts.length}
        sortOptions={[
          { label: "Relevance", value: "relevance" },
          { label: "Price (Low to High)", value: "price-increasing" },
          { label: "Price (High to Low)", value: "price-decreasing" },
          { label: "Rating (Low to High)", value: "rating-increasing" },
          { label: "Rating (High to Low)", value: "rating-decreasing" },
        ]}
      />
    </div>
  );
}
