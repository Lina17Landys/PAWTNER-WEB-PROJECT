import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo/logo.png'
import './LandingNavBar.css'

function NavBar() {

  return (
    <header>
      <div className="text-line">
      <img className='logo-header-landing' src={Logo} alt="Pawtner Logo" />
        <p><a href="#Home">Home</a></p>
        <p><a href="#about">About Us</a></p>
        <p><a href="#services">Pets</a></p>
        <p><a href="#shop">Store</a></p>
      </div>
      <div className="btn-line">
        <Link to="/login" className="log-btn">Log In</Link>
        <Link to='/Signup' className="sign-btn">Sign Up</Link>
      </div>
    </header>
  );
}

export default NavBar 
