import { Link } from 'react-router-dom';
import './bar.css';

function NavBar() {
  return (
    <header>
      <img className="logo-img" src="./src/img/logo.png" alt="Logo" />
      <div className="text-line">
        <p>Home</p>
        <p>About Us</p>
        <p>Pets</p>
        <p>Store</p>
      </div>
      <div className="btn-line">
        
        <Link to="/login" className="log-btn">Log In</Link>
        <Link to="/signup" className="sign-btn">Sign Up</Link>
      </div>
    </header>
  );
}

export default NavBar;
