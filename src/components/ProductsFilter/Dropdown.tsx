import { useState } from "react";
import { IconArrowExpand } from "@/icons";
import styles from "./Dropdown.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

export default function Dropdown(props: Props) {
  const { label, children, ...restProps } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div {...restProps}>
      <button
        className={`${styles.dropdownButton} ${
          isExpanded ? styles.active : ""
        }`}
        onClick={() => setIsExpanded((state) => !state)}
      >
        <span>{label}</span>
        <IconArrowExpand className={styles.dropdownButtonIcon} />
      </button>
      {isExpanded && <div>{children}</div>}
    </div>
  );
}
