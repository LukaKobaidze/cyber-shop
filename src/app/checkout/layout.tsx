import Steps from "./_components/Steps";

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Steps />
      {children}
    </>
  );
}
