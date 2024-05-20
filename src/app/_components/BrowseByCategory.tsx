import Categories from "@/components/Categories";
import styles from "./BrowseByCategory.module.scss";

export default function BrowseByCategory() {
  return (
    <div className={styles.container}>
      <div className={`content-wrapper`}>
        <h2 className={styles.heading}>Browse By Category</h2>
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
    </div>
  );
}
