import React from 'react';
import './Footer.css';
import Logo from '../../../assets/Logo/logo.png';
import InstagramLogo from '../../../assets/Icons/SocialMediaIcons/Instagram - Logo.png';
import FacebookLogo from '../../../assets/Icons/SocialMediaIcons/Facebook - Logo.png';
import YoutubeLogo from '../../../assets/Icons/SocialMediaIcons/Youtube - Logo.png';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='footer-section'>
        <div className='footer-pawtner-brand-section'>
          <img className='footer-pawtner-logo' src= {Logo} alt="Pawtner Logo" />
          <p>Pawtner &copy; {new Date().getFullYear()}</p>
        </div>
        <ul className='footer-terms-section'>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
      <div className='footer-right-section'>
        <p>A comprehensive platform for pet adoption, health forums, and pet care resources.</p>
        <div className='footer-socialmedia-section '>
          <a href="https://facebook.com" aria-label="Facebook"><img src={FacebookLogo} alt="Facebook" /></a>
          <a href="https://instagram.com" aria-label="Instagram"><img src={InstagramLogo} alt="Instagram" /></a>
          <a href="https://www.youtube.com/" aria-label="Twitter"><img src={YoutubeLogo} alt="Twitter" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
