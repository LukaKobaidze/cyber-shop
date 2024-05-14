import HeroMain from "./pageComponents/HeroMain";
import HeroGrid from "./pageComponents/HeroGrid";
import Categories from "./pageComponents/Categories";
import Products from "./pageComponents/Products";

export default function Home() {
   return (
      <>
         <HeroMain />
         <HeroGrid />
         <Categories />
         <Products />
      </>
   );
}
