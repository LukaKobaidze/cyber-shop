import { IconDecrement, IconIncrement } from "@/icons";
import styles from "./Counter.module.scss";
import Tooltip from "../Tooltip";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  onValueChange: (value: number) => void;
  min?: number;
  max?: number;
}

export default function Counter(props: Props) {
  const { value, onValueChange, min, max, className, ...restProps } = props;

  return (
    <div className={`${styles.container} ${className || ""}`} {...restProps}>
      <button
        className={styles.button}
        onClick={() => {
          onValueChange(
            min === undefined ? value - 1 : Math.max(value - 1, min)
          );
        }}
      >
        <IconDecrement />
      </button>
      <div className={styles.value}>{value}</div>
      <button
        className={styles.button}
        onClick={() => {
          onValueChange(
            max === undefined ? value + 1 : Math.min(value + 1, max)
          );
        }}
      >
        <IconIncrement />
      </button>
    </div>
  );
}
