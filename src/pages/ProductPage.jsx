import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../api/api'; 
import '../style/ProductPage.css';  

const ProductPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const productList = await fetchProducts();
      setProducts(productList);
    };
    loadProducts();
  }, []);  

  return (
    <div className="product-page">
      <h1>Our Products</h1>
      {products.length === 0 ? (
        <div className="loading">Loading products...</div>
      ) : (
        <div className="product-card-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <div className="button-container">
                <Link to={`/product/${product.id}`}>View Details</Link>
                {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
