import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cart, updateCartQuantity }) => {
  if (cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map((product, index) => (
        <div key={index}>
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <div>
            <button onClick={() => updateCartQuantity(product.id, product.quantity - 1)}>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => updateCartQuantity(product.id, product.quantity + 1)}>+</button>
          </div>
        </div>
      ))}
      <h2>Total: ${totalAmount}</h2>
      <Link to="/order">
        <button>Proceed to Order</button>
      </Link>
    </div>
  );
};

export default CartPage;
