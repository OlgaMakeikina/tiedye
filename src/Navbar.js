import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartItemCount } from './redux/cartSlice'; 
import cart from './cart.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const itemCount = useSelector(getCartItemCount); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <button className="burger-menu" onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'}
      </button>
      
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>

      <div className="cart-link">
        <Link to="/cart">
          <img src={cart} width="50px" alt="Cart Icon" />
          {itemCount > 0 && <span className="cart-count">{itemCount}</span>} 
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
