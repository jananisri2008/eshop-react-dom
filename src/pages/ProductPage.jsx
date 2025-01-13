// import React from 'react';
// import { Link } from 'react-router-dom';
// import product2Image from '../assets/product2.jpg';
// import product3Image from '../assets/product3.jpg';
// import product4Image from '../assets/product4.jpg';

// const products = [
//   { id: 1, title: 'Product 2', price: 25, image: product2Image },
//   { id: 2, title: 'Product 3', price: 30, image: product3Image },
//   { id: 3, title: 'Product 4', price: 15, image: product4Image }
// ];

// const ProductPage = ({ addToCart }) => {
//   return (
//     <div>
//       <h1>Our Products</h1>
//       {products.map((product) => (
//         <div key={product.id} className="product-card">
//           <img src={product.image} alt={product.title} width="150" />
//           <h3>{product.title}</h3>
//           <p>Price: ${product.price}</p>
//           <Link to={`/product/${product.id}`}>View Details</Link>
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductPage;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../api/api'; 

const ProductPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const productList = await fetchProducts();
      setProducts(productList);
    };
    loadProducts();
  }, []);  // Runs the component is added

  return (
    <div>
      <h1>Our Products</h1>
      {products.length === 0 ? (
        <div>Loading products...</div>
      ) : (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} width="150" />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductPage;
