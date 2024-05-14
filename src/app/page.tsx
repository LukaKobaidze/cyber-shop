import HeroMain from "./pageComponents/HeroMain";
import HeroGrid from "./pageComponents/HeroGrid";
import Categories from "./pageComponents/Categories";
import Products from "./pageComponents/Products";
import Brands from "./pageComponents/Brands";
import Discounts from "./pageComponents/Discounts";

export default function Home() {
  return (
    <>
      <HeroMain />
      <HeroGrid />
      <Categories />
      <Products />
      <Brands />
      <Discounts />
    </>
  );
}
