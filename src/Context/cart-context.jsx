import React from "react";

const CartContext = React.createContext({
  items: [],
  totalQuantity: 0,
  addToCart: () => {},
  removeFromCart: () => {}
});

export default CartContext;