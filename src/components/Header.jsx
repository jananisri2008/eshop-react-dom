import React from 'react';
import { NavLink } from 'react-router-dom';  
import '../style/Header.css';  
import logo from '../assets/logo.jpg'; 
const Header = ({ cart }) => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'italic' : 'none',
      color: isActive ? 'brown' : 'black',
    };
  };

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Shop Logo" className="logo-img" />
        </NavLink>
      </div>
      <nav className="nav">
        <NavLink style={navLinkStyles} to="/">Home</NavLink>
        <NavLink style={navLinkStyles} to="/products">Products</NavLink>
        <NavLink style={navLinkStyles} to="/order">Order</NavLink>
        <NavLink style={navLinkStyles} to="/cart">
          Cart ({cart.reduce((total, product) => total + product.quantity, 0)})
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
