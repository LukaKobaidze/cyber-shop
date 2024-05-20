import { getProductPageData } from "@/data/products.data";
import styles from "./page.module.scss";
import PageRoute from "@/components/PageRoute";
import ProductMain from "./_components/ProductMain";
import ProductDetails from "./_components/ProductDetails";
import ProductReviews from "./_components/ProductReviews";
import RelatedProducts from "./_components/RelatedProducts";

interface Props {
  params: {
    product: [string, string];
  };
}

export default function ProductPage({ params }: Props) {
  const [slug, id] = params.product;

  const data = getProductPageData(id);

  return (
    <div>
      <div className="content-wrapper">
        <PageRoute routes={["catalog", data.category, data.brand, slug]} />
      </div>
      <ProductMain
        images={data.images}
        title={data.title}
        description={data.description}
        price={data.price}
        priceDiscount={data.priceDiscount}
      />
      <ProductDetails description={data.description} details={data.details} />
      <ProductReviews />
      <RelatedProducts />
    </div>
  );
}
