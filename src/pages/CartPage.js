import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, adjustQuantity, selectCartItems } from '../redux/slices/cartSlice';

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="mb-3">
          <h5>{item.title}</h5>
          <p>${item.price} x {item.quantity}</p>
          <button onClick={() => dispatch(adjustQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
          <button onClick={() => dispatch(adjustQuantity({ id: item.id, quantity: Math.max(item.quantity - 1, 1) }))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default CartPage;
