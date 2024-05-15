import Link from "next/link";
import styles from "./Categories.module.scss";
import {
  IconCamera,
  IconComputer,
  IconGaming,
  IconHeadphone,
  IconPhone,
  IconSmartWatch,
} from "@/icons";
import { hyphenCaseToTitleCase } from "@/utils";

const categoryIcon = {
  "/phones": IconPhone,
  "/smart-watches": IconSmartWatch,
  "/cameras": IconCamera,
  "/headphones": IconHeadphone,
  "/computers": IconComputer,
  "/gaming": IconGaming,
} as const;
type CategoryType = keyof typeof categoryIcon;

interface Props {
  categoriesArr: CategoryType[];
}

export default function Categories(props: Props) {
  const { categoriesArr } = props;

  return (
    <div className={styles.categories}>
      {categoriesArr.map((category) => {
        const Icon = categoryIcon[category as CategoryType];

        return (
          <Link
            href={"/catalog" + category}
            className={`card ${styles.category}`}
          >
            <Icon className={styles.categoryIcon} />
            <span className={styles.categoryName}>
              {hyphenCaseToTitleCase(category.slice(1))}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
