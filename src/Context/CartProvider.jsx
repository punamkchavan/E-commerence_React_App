import { useState } from "react";
import CartContext from "./cart-context";

export default function CartProvider(props) {

  const [cartItems, setCartItems] = useState([]);

  const addToCartHandler = (product) => {
    setCartItems((prevItems) => {

      const existingItem = prevItems.find(
        (item) => item.title === product.title
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCartHandler = (title) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.title !== title)
    );
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartContextValue = {
    items: cartItems,
    totalQuantity: totalQuantity,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
}
