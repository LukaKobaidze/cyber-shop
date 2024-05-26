"use client";
import { forwardRef } from "react";
import styles from "./Input.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}
type Ref = HTMLInputElement;

export default forwardRef<Ref, Props>(function Input(props: Props, ref) {
  const { error, className, ...restProps } = props;

  return (
    <input
      ref={ref}
      className={`${styles.input} ${error ? styles.error : ""} ${className || ""}`}
      {...restProps}
    />
  );
});
