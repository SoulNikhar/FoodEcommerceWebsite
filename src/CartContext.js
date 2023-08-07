import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex !== -1) {
      // If the item already exists in the cart, update its quantity
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem, index) =>
          index === itemIndex ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
    }
  };

  const cartData = {
    cartItems,
    addToCart,
  };

  return <CartContext.Provider value={cartData}>{children}</CartContext.Provider>;
};
