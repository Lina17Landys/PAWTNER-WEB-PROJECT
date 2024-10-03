import './nv.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; //dependencia npm install @fortawesome/fontawesome-free
import { Link } from 'react-router-dom';

function BarDash() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img className='logo-img2' src='./src/img/logo.png' alt='Logo' />
        
        <ul className="navbar-menu">
          <li><Link to="/Dashboard">Home</Link></li>
          <li><Link to="/pets">Pets</Link></li>
          <li><Link to="/report-system">Report System</Link></li>
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

        <img className='profile-img' src='./src/img/profile.png' alt='Profile' />
      </div>
    </nav>
  );
}

export default BarDash;
