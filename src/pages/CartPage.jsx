import React from 'react';
import { Link } from 'react-router-dom';
import '../style/CartPage.css';  
//function component
const CartPage = ({ cart, updateCartQuantity }) => {//2 pros
  // cart-->array of product added
  // updatedCQty-->func pass from parent component update the qty of product
  if (cart.length === 0) {//empty cart handle
    return (
      <div className="cart-page empty-cart-message">
        <h1>Your cart is empty.</h1>
        {/* link component-->navigate to the product page. */}
        <Link to="/products">
          <button className="go-to-products-button">Go to Products</button>
        </Link>
      </div>
    );
  }
  // total amount calc
  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {/* map()-->iterate the each product in cart */}
      {cart.map((product, index) => (
        <div key={index} className="cart-item">
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <div>
            {/* qty update + or - */}
            <button onClick={() => updateCartQuantity(product.id, product.quantity - 1)}>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => updateCartQuantity(product.id, product.quantity + 1)}>+</button>
          </div>
        </div>
      ))}
      <h2 className="total">Total: ${totalAmount}</h2>
      {/* link--> navigate to the order page */}
      <Link to="/order">
        <button className="proceed-button">Proceed to Order</button>
      </Link>
    </div>
  );
};

export default CartPage;
