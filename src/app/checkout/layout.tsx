import styles from "./layout.module.scss";

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>STEPS</div>
      {children}
    </>
  );
}
