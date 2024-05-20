import React from "react";
import styles from "./Paragraph.module.scss";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {}

export default function Paragraph(props: Props) {
  const { className, children, ...restProps } = props;
  return (
    <p className={`${styles.paragraph} ${className || ""}`} {...restProps}>
      {children}
    </p>
  );
}
