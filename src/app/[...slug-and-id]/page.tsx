import { getProductPageData } from "@/data/products.data";
import styles from "./page.module.scss";
import PageRoute from "@/components/PageRoute";
import ProductMain from "./_components/ProductMain";
import ProductDetails from "./_components/ProductDetails";
import ProductReviews from "./_components/ProductReviews";
import RelatedProducts from "./_components/RelatedProducts";

interface Props {
  params: {
    "slug-and-id": [string, string];
  };
}

export default function ProductPage({ params }: Props) {
  const [slug, id] = params["slug-and-id"];

  console.log({ slug, id });

  const data = getProductPageData(id);

  return (
    <div className={`contentWrapper`}>
      <PageRoute routes={["catalog", data.category, data.brand, slug]} />
      <ProductMain
        images={data.images}
        title={data.title}
        description={data.description}
        price={data.price}
        salePercentage={data.salePercentage}
      />
      <ProductDetails />
      <ProductReviews />
      <RelatedProducts />
    </div>
  );
}
