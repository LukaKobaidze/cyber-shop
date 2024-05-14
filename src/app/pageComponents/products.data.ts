// DELETE THIS LATER

type ProductType = {
  link: string;
  image: string;
  title: string;
  price: number;
};

export const oneProduct: ProductType = {
  link: "/product/iphone-14",
  image: "/delete-later/iphone.png",
  title: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
  price: 900,
};

const productsData = Array.from({ length: 8 }).map(() => oneProduct);

export { productsData };
