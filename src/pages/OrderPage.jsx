import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/OrderPage.css';  

const OrderPage = ({ cart }) => {
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="order-page">
        <h1>Your cart is empty. Please add products to your cart.</h1>
        <button className="go-to-products-button" onClick={() => navigate('/products')}>Go to Products</button>
      </div>
    );
  }

  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const handleConfirmOrder = () => {
    alert('Order confirmed! Thank you for your purchase.');
    navigate('/');
  };

  return (
    <div className="order-page">
      <h1>Order Summary</h1>
      <div className="order-summary">
        {cart.map((product, index) => (
          <div key={index}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
        ))}
        <h2>Total: ${totalAmount}</h2>
      </div>
      <button className="confirm-order-button" onClick={handleConfirmOrder}>Confirm Order</button>
      <button className="back-to-cart-button" onClick={() => navigate('/cart')}>Go back to Cart</button>
    </div>
  );
};

export default OrderPage;
