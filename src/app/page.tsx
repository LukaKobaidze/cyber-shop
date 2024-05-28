import HeroMain from "./_components/HeroMain";
import BrowseByCategory from "./_components/BrowseByCategory";
import Products from "./_components/Products";
import Brands from "./_components/Brands";
import Discounts from "./_components/Discounts";
import BigSummerSale from "./_components/BigSummerSale";
import HeroGrid from "./_components/HeroGrid";

export default function HomePage() {
  return (
    <>
      <HeroMain />
      <HeroGrid />
      <BrowseByCategory />
      <Products />
      <Brands />
      <Discounts />
      <BigSummerSale />
    </>
  );
}
