import { IconStar } from "@/icons";
import styles from "./Stars.module.scss";
import { useMemo } from "react";

interface Props {
  amount: number;
}

export default function Stars(props: Props) {
  const { amount } = props;

  const renderStars = useMemo(() => {
    const arr: React.ReactElement[] = [];

    for (let i = 0; i < 5; i++) {
      arr.push(<IconStar className={styles.star} />);
    }

    return arr;
  }, [amount]);

  return <div className={styles.container}>{renderStars}</div>;
}
