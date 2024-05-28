import React from "react";
import styles from "./Select.module.scss";
import { IconArrow } from "@/icons";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  classNameContainer?: string;
}

export default function Select(props: Props) {
  const { classNameContainer, className, children, ...restProps } = props;

  return (
    <div className={`${styles.container} ${classNameContainer || ""}`}>
      <select className={`${styles.select} ${className || ""}`} {...restProps}>
        {children}
      </select>
      <IconArrow className={styles.arrowIcon} />
    </div>
  );
}
