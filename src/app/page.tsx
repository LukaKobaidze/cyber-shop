import HeroMain from "./_components/HeroMain";
import HeroGrid from "./_components/HeroGrid";
import Categories from "./_components/BrowseByCategory";
import Products from "./_components/Products";
import Brands from "./_components/Brands";
import Discounts from "./_components/Discounts";
import BigSummerSale from "./_components/BigSummerSale";

export default function HomePage() {
  return (
    <>
      <HeroMain />
      <HeroGrid />
      <Categories />
      <Products />
      <Brands />
      <Discounts />
      <BigSummerSale />
    </>
  );
}
