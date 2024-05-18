"use client";

import PageProducts from "@/components/PageProducts/PageProducts";
import styles from "./WishlistProducts.module.scss";
import { useWishlistStore } from "@/stores/wishlist";

interface Props {}

export default function WishlistProducts(props: Props) {
  const products = useWishlistStore((state) => state.products);

  const productsArr = Object.keys(products).map((id) => ({
    ...products[id],
    id,
  }));

  return (
    <PageProducts
      products={productsArr}
      currentPage={1}
      totalPages={1}
      totalProducts={productsArr.length}
      sortOptions={[
        { label: "Most Recent", value: "most-recent" },
        { label: "Least Recent", value: "least-recent" },
        { label: "Price (Low to High)", value: "price-increasing" },
        { label: "Price (High to Low)", value: "price-decreasing" },
        { label: "Rating (Low to High)", value: "rating-increasing" },
        { label: "Rating (High to Low)", value: "rating-decreasing" },
      ]}
      textAmountProducts="Wishlist Products"
      disableFilter
    />
  );
}
