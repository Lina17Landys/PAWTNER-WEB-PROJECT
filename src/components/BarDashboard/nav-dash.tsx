import React, { useState } from 'react';
import './nv.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const BarDash: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img className="logo-img2" src="./src/img/logo.png" alt="Logo" />
        
        <div className="hamburger-menu" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>
        
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/Dashboard">Home</Link></li>
<<<<<<< HEAD
          <li><Link to="/pets">Pets</Link></li>
          <li><Link to="/ReportSystem">Report System</Link></li>
=======
          <li><Link to="/PetsAdoption">Pets</Link></li>
          <li><Link to="/ReportSystem">Report System</Link></li>          
>>>>>>> develop
          <li><Link to="/DiseaseForum">Forum</Link></li>
          <li><Link to="/Shop">Shop</Link></li>
          
        </ul>
      </div>

      <div className="navbar-right">
        <div className="search-bar">
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
          <input type="text" placeholder="Search..." />
        </div>

        <Link to="/profile">
          <img className="profile-img" src="./src/img/profile.png" alt="Profile" />
        </Link>
      </div>
    </nav>
  );
};

export default BarDash;

