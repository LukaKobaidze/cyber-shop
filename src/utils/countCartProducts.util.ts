import { CartStore } from "@/stores/cart/cart-store";

export default function countCartProducts(cartProducts: CartStore["products"]) {
  let output = 0;
  const productIds = Object.keys(cartProducts);

  for (let i = 0; i < productIds.length; i++) {
    output += cartProducts[productIds[i]].quantity;
  }

  return output;
}
