import { IconDecrement, IconIncrement } from "@/icons";
import styles from "./Counter.module.scss";
import Tooltip from "../Tooltip";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

export default function Counter(props: Props) {
  const { value, onDecrement, onIncrement } = props;

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => onDecrement()}>
        <IconDecrement />
      </button>
      <div className={styles.value}>{value}</div>
      <button className={styles.button} onClick={() => onIncrement()}>
        <IconIncrement />
      </button>
    </div>
  );
}
