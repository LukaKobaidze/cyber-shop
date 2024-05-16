import styles from "./PageRoute.module.scss";
import Link from "next/link";
import { hyphenCaseToTitleCase } from "@/utils";
import { IconArrow } from "@/icons";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  routes: string[];
}

export default function PageRoute(props: Props) {
  const { routes, className, ...restProps } = props;

  const lastRoute = routes[routes.length - 1];

  return (
    <div className={`${styles.container} ${className}`} {...restProps}>
      <Link href="/" className={styles.route}>
        Home
      </Link>
      {routes.slice(0, -1).map((route) => (
        <>
          <div className={styles.arrow}>
            <IconArrow />
          </div>
          <Link href={"/" + route} className={styles.route}>
            {hyphenCaseToTitleCase(route)}
          </Link>
        </>
      ))}
      <>
        <div className={styles.arrow}>
          <IconArrow />
        </div>
        <span className={styles.route}>{hyphenCaseToTitleCase(lastRoute)}</span>
      </>
    </div>
  );
}
