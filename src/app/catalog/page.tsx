import PageRoute from "@/components/PageRoute";
import Categories from "@/components/Categories";
import styles from "./page.module.scss";
import PageProducts from "@/components/PageProducts/PageProducts";
import { getProducts } from "@/backend/lib/products";

interface Props {
  searchParams?: {
    page?: string;
    sort?: string;
  };
}

export default async function CatalogPage({ searchParams }: Props) {
  const page = Number(searchParams?.page) || 1;
  const limit = 12;

  const { products, totalProducts } = await getProducts({
    page: Number(searchParams?.page),
    limit,
  });

  return (
    <div className={`content-wrapper ${styles.container}`}>
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
        products={products}
        totalProducts={totalProducts}
        currentPage={page}
        totalPages={Math.ceil(totalProducts / limit)}
        sortOptions={[
          { label: "Relevance", value: "relevance" },
          { label: "Price (Low to High)", value: "price-increasing" },
          { label: "Price (High to Low)", value: "price-decreasing" },
          { label: "Rating (Low to High)", value: "rating-increasing" },
          { label: "Rating (High to Low)", value: "rating-decreasing" },
        ]}
        className={styles.pageProducts}
      />
    </div>
  );
}
