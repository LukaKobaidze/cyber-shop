import { objectOmit } from "@/utils";
import { createJSONStorage, persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";

type WishlistState = {
  products: Record<
    string, // <- unique id
    {
      slug: string;
      image: string;
      title: string;
      price: number;
      priceDiscount?: number;
      dateAdded: Date;
    }
  >;
};

type WishlistActions = {
  addToWishlist: (
    product: Omit<WishlistState["products"][number], "dateAdded"> & {
      id: string;
    }
  ) => void;
  removeFromWishlist: (id: string) => void;
};

export type WishlistStore = WishlistState & WishlistActions;

const initialState: WishlistState = {
  products: {},
};

export const createWishlistStore = (
  argInitState: WishlistState = initialState
) => {
  return createStore<WishlistStore>()(
    persist(
      (set) => ({
        ...argInitState,

        addToWishlist: (product) => {
          const { id, ...productData } = product;

          return set((state) => ({
            ...state,
            products: {
              ...state.products,
              [id]: { ...productData, dateAdded: new Date() },
            },
          }));
        },

        removeFromWishlist: (id) => {
          return set((state) => ({
            ...state,
            products: objectOmit(state.products, id),
          }));
        },
      }),
      { name: "wishlist", storage: createJSONStorage(() => localStorage) }
    )
  );
};
