import styles from "./Badge.module.scss";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {}

export default function Badge(props: Props) {
  const { className, children, ...restProps } = props;

  return (
    <span className={`${styles.badge} ${className || ""}`} {...restProps}>
      {children}
    </span>
  );
}
