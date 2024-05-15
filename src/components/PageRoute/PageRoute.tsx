"use client";

import { usePathname } from "next/navigation";
import styles from "./PageRoute.module.scss";
import Link from "next/link";
import { hyphenCaseToTitleCase } from "@/utils";
import { IconArrow } from "@/icons";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function PageRoute(props: Props) {
  const { className, ...restProps } = props;

  const pathname = usePathname();

  const routes = pathname.slice(1).split("/");

  return (
    <div className={`${styles.container} ${className}`} {...restProps}>
      <Link href="/" className={styles.route}>
        Home
      </Link>
      {routes.map((route) => (
        <>
          <div className={styles.arrow}>
            <IconArrow />
          </div>
          <Link href={"/" + route} className={styles.route}>
            {hyphenCaseToTitleCase(route)}
          </Link>
        </>
      ))}
    </div>
  );
}
