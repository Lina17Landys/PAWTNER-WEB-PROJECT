//import { useState } from 'react'
import './bar.css'

function NavBar() {

  return (
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
}

export default NavBar 
