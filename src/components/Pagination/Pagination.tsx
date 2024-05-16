import { IconArrow } from "@/icons";
import styles from "./Pagination.module.scss";
import Link from "next/link";
import { useMemo } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
}

export default function Pagination(props: Props) {
  const { currentPage, totalPages, className, ...restProps } = props;

  const searchQueryPrefix = "?page=";

  const pages = useMemo(() => {
    let arr = [];

    if (currentPage !== 1 && currentPage !== totalPages) {
      arr.push(currentPage);
    }

    // Left side of the Current Page
    if (currentPage > 2) {
      arr.unshift(currentPage - 1);

      if (currentPage - 1 > 2) {
        arr.unshift(currentPage - 2);
      }
    }

    // Right side of the Current Page
    if (currentPage < totalPages - 1) {
      arr.push(currentPage + 1);

      if (currentPage < totalPages - 2) {
        arr.push(currentPage + 2);
      }
    }

    return arr;
  }, [currentPage]);

  return (
    <div className={`${styles.container} ${className || ""}`} {...restProps}>
      <Link
        href={searchQueryPrefix + Math.max(currentPage - 1, 1)}
        className={`${styles.arrowLink} ${styles.arrowLinkLeft} ${
          currentPage === 1 ? styles.disabled : ""
        }`}
      >
        <IconArrow className={styles.arrowIcon} />
      </Link>
      <Link
        href={searchQueryPrefix + 1}
        className={`${styles.page} ${currentPage === 1 ? styles.active : ""}`}
      >
        1
      </Link>
      {pages[0] > 2 && <div className={styles.gapDots}>....</div>}
      {pages.map((page) => (
        <Link
          href={searchQueryPrefix + page}
          className={`${styles.page} ${
            currentPage === page ? styles.active : ""
          }`}
        >
          {page}
        </Link>
      ))}
      {pages[pages.length - 1] < totalPages - 1 && (
        <div className={styles.gapDots}>....</div>
      )}
      <Link
        href={searchQueryPrefix + totalPages}
        className={`${styles.page} ${
          currentPage === totalPages ? styles.active : ""
        }`}
      >
        {totalPages}
      </Link>
      <Link
        href={searchQueryPrefix + (currentPage + 1)}
        className={`${styles.arrowLink} ${styles.arrowLinkRight}`}
      >
        <IconArrow className={styles.arrowIcon} />
      </Link>
    </div>
  );
}
