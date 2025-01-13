import React from 'react';
import { Link } from 'react-router-dom';
import '../style/CartPage.css';  

const CartPage = ({ cart, updateCartQuantity }) => {
  if (cart.length === 0) {
    return (
      <div className="cart-page empty-cart-message">
        <h1>Your cart is empty.</h1>
        <Link to="/products">
          <button className="go-to-products-button">Go to Products</button>
        </Link>
      </div>
    );
  }

  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.map((product, index) => (
        <div key={index} className="cart-item">
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <div>
            <button onClick={() => updateCartQuantity(product.id, product.quantity - 1)}>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => updateCartQuantity(product.id, product.quantity + 1)}>+</button>
          </div>
        </div>
      ))}
      <h2 className="total">Total: ${totalAmount}</h2>
      <Link to="/order">
        <button className="proceed-button">Proceed to Order</button>
      </Link>
    </div>
  );
};

export default CartPage;
