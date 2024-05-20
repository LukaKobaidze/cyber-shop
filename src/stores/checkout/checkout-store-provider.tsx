"use client";

import { createContext, useContext, useRef } from "react";
import { StoreApi, useStore } from "zustand";
import { CheckoutStore } from "./checkout-store";
import { createWishlistStore } from "../wishlist/wishlist-store";

const CheckoutStoreContext = createContext<StoreApi<CheckoutStore> | null>(
  null,
);

type ProviderProps = { children: React.ReactNode };

export const CheckoutStoreProvider = ({ children }: ProviderProps) => {
  const storeRef = useRef<StoreApi<CheckoutStore>>();

  if (!storeRef.current) {
    storeRef.current = createWishlistStore();
  }

  return (
    <CheckoutStoreContext.Provider value={storeRef.current}>
      {children}
    </CheckoutStoreContext.Provider>
  );
};

export const useCheckoutStore = <T,>(
  selector: (store: CheckoutStore) => T,
): T => {
  const checkoutStoreContext = useContext(CheckoutStoreContext);

  if (!checkoutStoreContext) {
    throw new Error(
      "useCheckoutStore must be used within CheckoutStoreProvider",
    );
  }

  return useStore(checkoutStoreContext, selector);
};
