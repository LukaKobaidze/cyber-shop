"use client";

import { createContext, useContext, useRef } from "react";
import { StoreApi, useStore } from "zustand";
import { WishlistStore, createWishlistStore } from "./wishlist-store";

const WishlistStoreContext = createContext<StoreApi<WishlistStore> | null>(
  null
);

type ProviderProps = { children: React.ReactNode };

export const WishlistStoreProvider = ({ children }: ProviderProps) => {
  const storeRef = useRef<StoreApi<WishlistStore>>();

  if (!storeRef.current) {
    storeRef.current = createWishlistStore();
  }

  return (
    <WishlistStoreContext.Provider value={storeRef.current}>
      {children}
    </WishlistStoreContext.Provider>
  );
};

export const useWishlistStore = <T,>(
  selector: (store: WishlistStore) => T
): T => {
  const wishlistStoreContext = useContext(WishlistStoreContext);

  if (!wishlistStoreContext) {
    throw new Error("useWishlistStore must be used within WishlistStoreProvider");
  }

  return useStore(wishlistStoreContext, selector);
};
