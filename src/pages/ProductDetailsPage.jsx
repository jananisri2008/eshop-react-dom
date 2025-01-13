//import react,react-router-dom,api,style
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../api/api';  
import '../style/ProductDetailsPage.css'; 
//declared component 
const ProductDetailsPage = ({ addToCart }) => {//addToCart-->add the products in the cart
  //react-router-useParams hook(is used to retrieve the dynamic route parameters )
  const { id } = useParams();//fetch the product details from id
  const [product, setProduct] = useState(null);//hold product details
  const [quantity, setQuantity] = useState(1);//hold qty product
  //useeffect hook
  useEffect(() => {
    //loadProduct()-->async() to fetch the data from api using fetchProductById()
    const loadProduct = async () => {
      const productData = await fetchProductById(id);
      setProduct(productData);//update the product state
    };
    loadProduct();
  }, [id]); //rerun the id whenever changes (id) 
  //qtychange handle
  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => {//update the qty state-->value will be change
      const newQuantity = prevQuantity + change;
      return newQuantity > 0 ? newQuantity : 1;
    });
  };
  //conditional render
  //product-->(null) render a message
  if (!product) return <div className="loading">Loading product details...</div>;

  return (
    <div className="product-details-page">
      {/* display the pro-title */}
      <h1>{product.title}</h1>
      {/* display the pro-img */}
      <img src={product.image} alt={product.title} width="300" />
      {/* display product details */}
      <p>{product.description}</p>
      {/* display the pro-amt */}
      <p>Price: ${product.price}</p>
      {/* qty increament and decrement */}
      <div className="quantity-container">
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>
      {/* add the prodcut in the cart with their qty */}
      <button className="add-to-cart-btn" onClick={() => addToCart({ ...product, quantity })}>Add to Cart</button>
      {/* navigate back to product page without reload */}
      <Link to="/products" className="back-to-products-link">Back to Products</Link>
    </div>
  );
};

export default ProductDetailsPage;
