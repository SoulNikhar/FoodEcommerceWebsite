import React from 'react';
import { useCartContext } from './CartContext';

const File2 = () => {
  const { cartItems } = useCartContext();

  return (
    <div>
      <h1>File 2</h1>
      <div>
        <h2>Cart Items:</h2>
        <ul>
          {cartItems.map((cartItem) => (
            <li key={cartItem.id}>
              {cartItem.name} - ${cartItem.price} - Quantity: {cartItem.quantity}
            </li>
          ))}
        </ul>
      </div>
      <br />

    </div>
  );
};

export default File2;
