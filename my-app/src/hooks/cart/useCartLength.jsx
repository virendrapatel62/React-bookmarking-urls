import { useCart } from "./useCart";

export const useCartLength = () => {
  const { cart } = useCart();

  return cart?.length || 0;
};
