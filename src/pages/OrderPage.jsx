import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderPage = ({ cart }) => {
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div>
        <h1>Your cart is empty. Please add products to your cart.</h1>
        <button onClick={() => navigate('/products')}>Go to Products</button>
      </div>
    );
  }

  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const handleConfirmOrder = () => {
    alert('Order confirmed! Thank you for your purchase.');
    navigate('/');
  };

  return (
    <div>
      <h1>Order Summary</h1>
      {cart.map((product, index) => (
        <div key={index}>
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
        </div>
      ))}
      <h2>Total: ${totalAmount}</h2>
      <button onClick={handleConfirmOrder}>Confirm Order</button>
      <button onClick={() => navigate('/cart')}>Go back to Cart</button>
    </div>
  );
};

export default OrderPage;
