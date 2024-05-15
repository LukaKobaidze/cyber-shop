import PageRoute from "@/components/PageRoute";
import styles from "./page.module.scss";

interface Props {
  params: {
    category: string;
  };
  searchParams?: {
    page?: string;
    sort?: string;
  };
}

export default function CatalogCategoryPage({ params, searchParams }: Props) {
  return (
    <div className={`contentWrapper`}>
      <PageRoute />
    </div>
  );
}
