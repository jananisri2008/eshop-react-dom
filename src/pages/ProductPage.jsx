import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../api/api'; 
import '../style/ProductPage.css';  
// function component
const ProductPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);//store the product from api,update the prodcut state
  //fetching products
  useEffect(() => {
    // async()-->calls fetchProducts() fetch the product from api
    const loadProducts = async () => {
      const productList = await fetchProducts();
      // update and store the list of products in product state
      setProducts(productList);
    };
    loadProducts();
  }, []);  

  return (
    <div className="product-page">
      <h1>Our Products</h1>
      {/* conditional rendering */}
      {products.length === 0 ? (// pro-len array is empty
        <div className="loading">Loading products...</div>
      ) : (//display the products in the prodcut page.
        <div className="product-card-container">
          {/* map-->each product create a product-cart for each one. */}
          {products.map((product) => (
            //product card render
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
