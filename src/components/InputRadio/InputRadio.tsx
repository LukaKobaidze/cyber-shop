import styles from "./InputRadio.module.scss";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  classNameContainer?: string;
}

export default function InputRadio(props: Props) {
  const { classNameContainer, id, children, className, checked, ...restProps } =
    props;

  return (
    <label
      htmlFor={id}
      className={`${styles.container} ${checked && styles.checked} ${classNameContainer || ""}`}
    >
      <div className={styles.left}>
        <input
          type="radio"
          id={id}
          className={`${styles.input} ${className || ""}`}
          checked={checked}
          {...restProps}
        />
      </div>
      {children}
    </label>
  );
}
