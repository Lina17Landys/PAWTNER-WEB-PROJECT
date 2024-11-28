import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo/logo.png';
import './LandingNavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="logo-container">
        <img className="logo-header-landing" src={Logo} alt="Pawtner Logo" />
        <nav className={`text-line ${menuOpen ? 'active' : ''}`}>
          <p><a href="#Home">Home</a></p>
          <p><a href="#about">About Us</a></p>
          <p><a href="#services">Pets</a></p>
          <p><a href="#shop">Store</a></p>
          <div className="btn-line">
            <Link to="/login" className="log-btn">Log In</Link>
            <Link to="/Signup" className="sign-btn">Sign Up</Link>
          </div>
          {menuOpen && (
            <button className="close-menu" onClick={closeMenu}>
              ✖
            </button>
          )}
        </nav>
      </div>
      <div className="menu" onClick={toggleMenu}>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
      </div>
    </header>
  );
}

export default NavBar;
