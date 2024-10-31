import React, { useState } from 'react';
import './nv.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const BarDash: React.FC = () => {
  // State to toggle menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img className="logo-img2" src="./src/img/logo.png" alt="Logo" />
        
        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>
        
        {/* Navbar Menu - Visible/Hidden based on state */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/Dashboard">Home</Link></li>
          <li><Link to="/pets">Pets</Link></li>
          <li><Link to="/ReportSystem">Report System</Link></li>
          <li><Link to="/DiseaseForum">Forum</Link></li>
          <li><Link to="/shop">Shop</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="search-bar">
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
          <input type="text" placeholder="Search..." />
        </div>

        <img className="profile-img" src="./src/img/profile.png" alt="Profile" />
      </div>
    </nav>
  );
};

export default BarDash;

