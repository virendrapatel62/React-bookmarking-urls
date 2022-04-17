import { useContext } from "react";
import { CartContext } from "../../components/Cart/CartContextProvider";

export const useCart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return {
    cart,
    addToCart,
    removeFromCart,
  };
};
