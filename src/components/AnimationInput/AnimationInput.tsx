import { useState } from "react";
import styles from "./AnimationInput.module.scss";
import Tooltip from "../Tooltip";
import { InputHTMLAttributes } from "react";

interface AnimationInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
  maxLength?: number
}

export default function AnimationInput(props: AnimationInputProps) {
  const { className, type, label, onChange, maxLength, ...restProps } = props;
  // input value state
  const [inputValue, setInputValue] = useState("");

  // access the input value for label animation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (onChange) {
      onChange(e); // Call the provided onChange function with the input value
    }
  };

  const isRequired = restProps.required;

  return (
    <div className={`${styles.animationInput} ${className || ""}`}>
      <input
        type={type}
        onChange={handleChange}
        placeholder=" "
        {...restProps}
        maxLength={maxLength}
      />
      <label className={`${inputValue.length > 0 ? styles.labelFilled : ""}`}>
        {label}
      </label>

      {isRequired && (
        <Tooltip position="top" text="Required">
          <div className={styles.required}>!</div>
        </Tooltip>
      )}
    </div>
  );
}
