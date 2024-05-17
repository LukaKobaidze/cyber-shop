"use client";

import { createContext, useContext, useRef } from "react";
import { StoreApi, useStore } from "zustand";
import { CartStore, createCartStore } from "./cart-store";

const CartStoreContext = createContext<StoreApi<CartStore> | null>(null);

type ProviderProps = { children: React.ReactNode };

export const CartStoreProvider = ({ children }: ProviderProps) => {
  const storeRef = useRef<StoreApi<CartStore>>();

  if (!storeRef.current) {
    storeRef.current = createCartStore();
  }

  return (
    <CartStoreContext.Provider value={storeRef.current}>
      {children}
    </CartStoreContext.Provider>
  );
};

export const useCartStore = <T,>(selector: (store: CartStore) => T): T => {
  const cartStoreContext = useContext(CartStoreContext);

  if (!cartStoreContext) {
    throw new Error("useCartStore must be used within CartStoreProvider");
  }

  return useStore(cartStoreContext, selector);
};
