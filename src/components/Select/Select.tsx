import React from "react";
import styles from "./Select.module.scss";
import { IconArrow } from "@/icons";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export default function Select(props: Props) {
  const { className, children, ...restProps } = props;

  return (
    <div className={styles.container}>
      <select className={`${styles.select} ${className || ""}`} {...restProps}>
        {children}
      </select>
      <IconArrow className={styles.arrowIcon} />
    </div>
  );
}
