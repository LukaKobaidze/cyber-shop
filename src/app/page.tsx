import HeroMain from "./pageComponents/HeroMain";
import HeroGrid from "./pageComponents/HeroGrid";
import Categories from "./pageComponents/Categories";
import Products from "./pageComponents/Products";
import Brands from "./pageComponents/Brands";
import Discounts from "./pageComponents/Discounts";
import BigSummerSale from "./pageComponents/BigSummerSale";

export default function Home() {
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
