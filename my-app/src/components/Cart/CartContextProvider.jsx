import React, { useState } from "react";

export const CartContext = React.createContext({});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const temp = [...cart];
    const index = temp.findIndex((cp) => cp.id === product.id);
    temp.splice(index, 1);
    setCart(temp);
  };

  const values = {
    addToCart,
    cart,
    removeFromCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}
