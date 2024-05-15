import PageRoute from "@/components/PageRoute";
import styles from "./page.module.scss";
import Categories from "@/components/Categories";

interface Props {}

export default function CatalogPage(props: Props) {
  return (
    <div className={`contentWrapper`}>
      <PageRoute />
      <Categories
        categoriesArr={[
          "/phones",
          "/smart-watches",
          "/cameras",
          "/headphones",
          "/computers",
          "/gaming",
        ]}
      />
    </div>
  );
}
