import { objectOmit } from "@/utils";
import { createJSONStorage, persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";

type WishlistState = {
  products: Record<
    string, // <- unique id
    {
      dateAdded: Date;
      data?: {
        slug: string;
        image: string;
        title: string;
        price: number;
        priceDiscount?: number;
      };
    }
  >;
};

type WishlistActions = {
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
};

export type WishlistStore = WishlistState & WishlistActions;

const initialState: WishlistState = {
  products: {},
};

export const createWishlistStore = (
  argInitState: WishlistState = initialState,
) => {
  return createStore<WishlistStore>()(
    persist(
      (set) => ({
        ...argInitState,

        addToWishlist: (id) => {
          return set((state) => ({
            ...state,
            products: {
              ...state.products,
              [id]: { dateAdded: new Date() },
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
      { name: "wishlist", storage: createJSONStorage(() => localStorage) },
    ),
  );
};
