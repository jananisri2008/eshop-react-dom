// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import ProductPage from './pages/ProductPage';
// import ProductDetailsPage from './pages/ProductDetailsPage';
// import CartPage from './pages/CartPage';
// import OrderPage from './pages/OrderPage';
// import Header from './components/Header';

// const App = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find(item => item.id === product.id);
//       if (existingProduct) {
//         return prevCart.map(item =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const updateCartQuantity = (id, quantity) => {
//     setCart(prevCart => {
//       if (quantity === 0) {
//         return prevCart.filter(item => item.id !== id);
//       }
//       return prevCart.map(item =>
//         item.id === id ? { ...item, quantity } : item
//       );
//     });
//   };

//   return (
//     <Router>
//       <Header cart={cart} />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/products" element={<ProductPage addToCart={addToCart} />} />
//         <Route path="/product/:id" element={<ProductDetailsPage addToCart={addToCart} />} />
//         <Route path="/cart" element={<CartPage cart={cart} updateCartQuantity={updateCartQuantity} />} />
//         <Route path="/order" element={<OrderPage cart={cart} />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductPage from './pages/ProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setCart(cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      ));
    } else {
      setCart([...cart, product]);
    }
  };

  const updateCartQuantity = (id, quantity) => {
    setCart(cart.map((product) =>
      product.id === id ? { ...product, quantity } : product
    ));
  };

  return (
    <Router>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetailsPage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} updateCartQuantity={updateCartQuantity} />} />
        <Route path="/order" element={<OrderPage cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;
