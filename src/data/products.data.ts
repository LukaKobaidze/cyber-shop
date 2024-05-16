// DELETE THIS LATER

export type ProductType = {
  id: string;
  slug: string;
  image: string;
  title: string;
  price: number;
  salePercentage?: number;
};

export const oneProduct: ProductType = {
  id: "123456789",
  slug: "iphone-14-pro-max",
  image: "/delete-later/iphone.png",
  title: "iPhone 14 Pro Max 128GB Deep Purple",
  price: 900,
  salePercentage: 40,
};

export const productsData = Array.from({ length: 8 }).map(() => oneProduct);

export const largeProductData = {
  id: "123456789",
  slug: "iphone-14-pro-max",
  category: "phones",
  brand: "apple",
  title: "Apple iPhone 14 Pro Max 128GB Deep Purple",
  price: 900,
  salePercentage: 40,
  description:
    "Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.",
  images: [
    "/delete-later/iphone.png",
    "/delete-later/iphone.png",
    "/delete-later/iphone.png",
    "/delete-later/iphone.png",
  ],
  details: [
    {
      title: "Screen",
      list: [
        { name: "Screen diagonal", value: '6.7"' },
        { name: "Screen diagonal", value: '6.7"' },
        { name: "Screen diagonal", value: '6.7"' },
        { name: "Screen diagonal", value: '6.7"' },
        { name: "Screen diagonal", value: '6.7"' },
        { name: "Screen diagonal", value: '6.7"' },
      ],
    },
    {
      title: "CPU",
      list: [
        { name: "CPU", value: 'A16 Bionic"' },
        { name: "CPU", value: 'A16 Bionic"' },
      ],
    },
  ],
  reviews: [],
};

export const getProductPageData = (id: string) => {
  return largeProductData;
};
