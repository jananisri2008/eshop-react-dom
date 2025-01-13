import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../api/api';  
import '../style/ProductDetailsPage.css';  
const ProductDetailsPage = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const loadProduct = async () => {
      const productData = await fetchProductById(id);
      setProduct(productData);
    };
    loadProduct();
  }, [id]);  

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + change;
      return newQuantity > 0 ? newQuantity : 1;
    });
  };

  if (!product) return <div className="loading">Loading product details...</div>;

  return (
    <div className="product-details-page">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="300" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      <div className="quantity-container">
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>

      <button className="add-to-cart-btn" onClick={() => addToCart({ ...product, quantity })}>Add to Cart</button>
      
      <Link to="/products" className="back-to-products-link">Back to Products</Link>
    </div>
  );
};

export default ProductDetailsPage;
