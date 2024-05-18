import { createStore } from "zustand/vanilla";

type WishlistState = {};

type WishlistActions = {};

export type WishlistStore = WishlistState & WishlistActions;

const initialState: WishlistState = {};

export const createWishlistStore = (
  argInitState: WishlistState = initialState
) => {
  return createStore<WishlistStore>()((set) => ({ ...argInitState }));
};
