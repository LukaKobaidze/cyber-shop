"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Select from "../Select";
import styles from "./ProductsSort.module.scss";

interface Props {}

export default function ProductsSort(props: Props) {
  const searchParams = useSearchParams();

  const sort = searchParams.get("sort");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const element = e.target as HTMLSelectElement;
  };

  return (
    <Select onChange={handleSelectChange}>
      <option value="relevance">Relevance</option>
      <option value="price-low-to-high">Price (Low to High)</option>
      <option value="price-high-to-low">Price (High to Low)</option>
      <option value="rating-low-to-high">Rating (Low to High)</option>
      <option value="rating-high-to-low">Rating (High to Low)</option>
    </Select>
  );
}
