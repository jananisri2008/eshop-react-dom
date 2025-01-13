// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import product1Image from '../assets/product1.jpg';  
// import product2Image from '../assets/product2.jpg';
// import product3Image from '../assets/product3.jpg';
// import product4Image from '../assets/product4.jpg';

// const products = [
//   { id: 1, title: 'Product 1', price: 20, description: 'Description for product 1', image: product1Image },
//   { id: 2, title: 'Product 2', price: 25, description: 'Description for product 2', image: product2Image },
//   { id: 3, title: 'Product 3', price: 30, description: 'Description for product 3', image: product3Image },
//   { id: 4, title: 'Product 4', price: 15, description: 'Description for product 4', image: product4Image }
// ];

// const ProductDetailsPage = ({ addToCart }) => {
//   const { id } = useParams();
//   const product = products.find((product) => product.id === parseInt(id));
//   const [quantity, setQuantity] = useState(1);

//   const handleQuantityChange = (change) => {
//     setQuantity((prevQuantity) => {
//       const newQuantity = prevQuantity + change;
//       return newQuantity > 0 ? newQuantity : 1;
//     });
//   };

//   if (!product) return <div>Product not found</div>;

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <img src={product.image} alt={product.title} width="300" />
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//       <div>
//         <button onClick={() => handleQuantityChange(-1)}>-</button>
//         <span>{quantity}</span>
//         <button onClick={() => handleQuantityChange(1)}>+</button>
//       </div>
//       <button onClick={() => addToCart({ ...product, quantity })}>Add to Cart</button>
//       <Link to="/products">Back to Products</Link>
//     </div>
//   );
// };

// export default ProductDetailsPage;



import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../api/api';  

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
  }, [id]);  // Runs-->product ID changes

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + change;
      return newQuantity > 0 ? newQuantity : 1;
    });
  };

  if (!product) return <div>Loading product details...</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="300" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div>
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>
      <button onClick={() => addToCart({ ...product, quantity })}>Add to Cart</button>
      <Link to="/products">Back to Products</Link>
    </div>
  );
};

export default ProductDetailsPage;
