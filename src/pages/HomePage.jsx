import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Our E-Shop!</h1>
      <p>Find the best products here.</p>
      <Link to="/products">Browse Products</Link>
    </div>
  );
};

export default HomePage;
