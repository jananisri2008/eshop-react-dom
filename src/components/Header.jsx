//import react,navlink,style,logo
import React from 'react';
import { NavLink } from 'react-router-dom';  
import '../style/Header.css';  
import logo from '../assets/e-logo.png'; 
//function component
const Header = ({ cart }) => {//cart-->props,display the cart item count.
  //function navlink
  const navLinkStyles = ({ isActive }) => {
    //styles
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'italic' : 'none',
      color: isActive ? 'brown' : 'black',
    };
  };

  return (
    //navbar
    <header className="header">
      <div className="logo">{/*logo */}
        <NavLink to="/">{/*creates a link to the root*/}
          <img src={logo} alt="Shop Logo" className="logo-img" />
        </NavLink>
      </div>
      <nav className="nav">{/*group the navlink*/}
        <NavLink style={navLinkStyles} to="/">Home</NavLink>
        <NavLink style={navLinkStyles} to="/products">Products</NavLink>
        <NavLink style={navLinkStyles} to="/order">Order</NavLink>
        <NavLink style={navLinkStyles} to="/cart">
        {/* reduce ()-->qty of products, total no of items --->cart display. */}
          Cart ({cart.reduce((total, product) => total + product.quantity, 0)})
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
