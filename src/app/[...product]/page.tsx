import PageRoute from "@/components/PageRoute";
import ProductMain from "./_components/ProductMain";
import ProductDetails from "./_components/ProductDetails";
import ProductReviews from "./_components/ProductReviews";
import RelatedProducts from "./_components/RelatedProducts";
import { getProductById } from "@/backend/lib/products";
import Paragraph from "@/components/Paragraph";

interface Props {
  params: {
    product: [string, string];
  };
}

export default async function ProductPage({ params }: Props) {
  const [slug, id] = params.product;

  const data = await getProductById(id);

  if (!data) {
    return <Paragraph>Loading...</Paragraph>;
  }

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
      <ProductReviews />
      <RelatedProducts />
    </div>
  );
}
