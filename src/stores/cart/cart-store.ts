import { objectOmit } from "@/utils";
import { createStore } from "zustand/vanilla";
import { createJSONStorage, persist } from "zustand/middleware";

export type CartState = {
  products: Record<
    string, // <- unique id
    {
      slug: string;
      image: string;
      title: string;
      quantity: number;
      price: number;
      priceDiscount?: number;
      dateAdded: Date;
    }
  >;
};

type CartActions = {
  addToCart: (
    product: Omit<CartState["products"][number], "dateAdded"> & { id: string },
  ) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
};

export type CartStore = CartState & CartActions;

const initialState: CartState = {
  products: {},
};

export const createCartStore = (argInitState: CartState = initialState) => {
  return createStore<CartStore>()(
    persist(
      (set) => ({
        ...argInitState,
        addToCart: (product) => {
          const { id, ...productData } = product;

          return set((state) => ({
            ...state,
            products: {
              ...state.products,
              [id]: {
                ...productData,
                dateAdded: state.products[id]?.dateAdded || new Date(),
                quantity:
                  (state.products[id]?.quantity || 0) + productData.quantity,
              },
            },
          }));
        },
        updateQuantity: (id, quantity) => {
          return set((state) => ({
            ...state,
            products: {
              ...state.products,
              [id]: { ...state.products[id], quantity },
            },
          }));
        },
        removeFromCart: (id) => {
          return set((state) => ({
            ...state,
            products: objectOmit(state.products, id),
          }));
        },
      }),
      { name: "cart", storage: createJSONStorage(() => localStorage) },
    ),
  );
};
