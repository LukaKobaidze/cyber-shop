import { createStore } from "zustand";

type CheckoutState = {};

type CheckoutActions = {};

export type CheckoutStore = CheckoutState & CheckoutActions;

const initialState: CheckoutState = {};

export const createCheckoutStore = (
  argInitState: CheckoutState = initialState,
) => {
  return createStore<CheckoutStore>()((set) => ({ ...argInitState }));
};
