//import { useState } from 'react'
import './bar.css'

function NavBar() {

  return (
<<<<<<< HEAD
    <header>
      <img className="logo-img" src="./src/img/logo.png" alt="Logo" />
      <div className="text-line">
        <p>Home</p>
        <p>About Us</p>
        <p>Pets</p>
        <p>Store</p>
      </div>
      <div className="btn-line">
        <Link to="/login" className="sign-btn">Log In</Link>
        <Link to='/Signup' className="log-btn">Sign Up</Link>
      </div>
    </header>
  );
=======
    <>
      <header>
        <div className='text-line'>
          <img className='logo-img' src='./src/img/logo.png'></img>
          <p>Home</p>
          <p>About Us</p>
          <p>Pets</p>
          <p>Store</p>
        </div>
        <div className='btn-line'>
          <button className='log-btn'>Log In</button>
          <button className='sign-btn'>Sign Up</button>
        </div>
      </header>
    </>
  )
>>>>>>> feature/Landing
}

export default NavBar 
