import './nv.css'
import '@fortawesome/fontawesome-free/css/all.min.css'; //dependencia npm install @fortawesome/fontawesome-free

function BarDash() {

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img className='logo-img2' src='./src/img/logo.png' alt='Logo' />
        
        <ul className="navbar-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Pets</a></li>
          <li><a href="#">Report System</a></li>
          <li><a href="#">Forum</a></li>
          <li><a href="#">Shop</a></li>
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
  )
}

export default BarDash