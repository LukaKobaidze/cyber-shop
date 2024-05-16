import styles from "./Input.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: Props) {
  const { className, ...restProps } = props;

  return (
    <input className={`${styles.input} ${className || ""}`} {...restProps} />
  );
}
