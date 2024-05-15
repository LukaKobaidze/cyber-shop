import PageRoute from "@/components/PageRoute";
import styles from "./page.module.scss";

interface Props {
  params: {
    category: string;
  };
}

export default function CatalogCategoryPage({ params }: Props) {
  return (
    <div className={`contentWrapper`}>
      <PageRoute />
    </div>
  );
}
