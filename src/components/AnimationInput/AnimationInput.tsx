import { useState } from "react";
import styles from "./AnimationInput.module.scss";
import Tooltip from "../Tooltip";
import { InputHTMLAttributes } from "react";

interface AnimationInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  maxLength?: number;
}

export default function AnimationInput(props: AnimationInputProps) {
  const { className, type, value, placeholder, ...restProps } = props;

  const isRequired = restProps.required;

  return (
    <div className={`${styles.animationInput} ${className || ""}`}>
      <input type={type} placeholder="" value={value} {...restProps} />
      <label
        className={`${String(value).length > 0 ? styles.labelFilled : ""}`}
      >
        {placeholder}
      </label>

      {isRequired && (
        <Tooltip position="top" text="Required">
          <div className={styles.required}>!</div>
        </Tooltip>
      )}
    </div>
  );
}
