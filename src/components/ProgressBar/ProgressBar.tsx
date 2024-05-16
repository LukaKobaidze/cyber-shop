import styles from "./ProgressBar.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  current: number;
  total: number;
}

export default function ProgressBar(props: Props) {
  const { current, total, className, ...restProps } = props;

  return (
    <div className={`${styles.progressBar} ${className || ""}`} {...restProps}>
      <div
        className={styles.progressBarFill}
        style={{ width: (current / total) * 100 + "%" }}
      />
    </div>
  );
}
