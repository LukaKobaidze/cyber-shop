import { createStore } from "zustand";

type CheckoutState = {
  address: {
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2?: string;
    country: string;
    city: string;
    state: string;
    zipCode: string;
  } | null;
  shipping: {
    method: "regular" | "asap" | "schedule";
    scheduleDate?: Date;
  } | null;
  payment: {
    id: string;
    cardNumberLastFour: string;
  } | null;
};

type CheckoutActions = {
  submitAddress: (address: NonNullable<CheckoutState["address"]>) => void;
  submitShipping: (shipping: NonNullable<CheckoutState["shipping"]>) => void;
  submitPayment: (payment: NonNullable<CheckoutState["payment"]>) => void;
};

export type CheckoutStore = CheckoutState & CheckoutActions;

const initialState: CheckoutState = {
  address: null,
  shipping: null,
  payment: null,
};

export const createCheckoutStore = (
  argInitState: CheckoutState = initialState,
) => {
  return createStore<CheckoutStore>()((set) => ({
    ...argInitState,
    submitAddress: () => {},
    submitShipping: () => {},
    submitPayment: (payment) => {
      return set({ payment });
    },
  }));
};
