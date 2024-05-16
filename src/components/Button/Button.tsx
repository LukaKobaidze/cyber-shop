import Link, { LinkProps } from "next/link";
import styles from "./Button.module.scss";

type Props = (
  | ({
      asLink?: false;
      href?: undefined;
    } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      asLink: true;
    } & React.AnchorHTMLAttributes<HTMLAnchorElement> &
      LinkProps)
) & { variant?: "1" | "2" };

export default function Button(props: Props) {
  if (props.asLink) {
    const { variant = 1, className, children, ...restProps } = props;

    return (
      <Link
        className={`${styles.button} ${styles[`button--${variant}`]} ${
          className || ""
        }`}
        {...restProps}
      >
        {children}
      </Link>
    );
  } else {
    const { variant = 1, className, children, ...restProps } = props;

    return (
      <button
        className={`${styles.button} ${styles[`button--${variant}`]} ${
          className || ""
        }`}
        {...restProps}
      >
        {children}
      </button>
    );
  }
}
