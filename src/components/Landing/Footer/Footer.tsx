import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <p>Pawtner &copy; {new Date().getFullYear()}</p>
        <ul>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <a href="https://facebook.com" aria-label="Facebook"><img src="/icons/facebook.svg" alt="Facebook" /></a>
        <a href="https://instagram.com" aria-label="Instagram"><img src="/icons/instagram.svg" alt="Instagram" /></a>
        <a href="https://twitter.com" aria-label="Twitter"><img src="/icons/twitter.svg" alt="Twitter" /></a>
      </div>
    </footer>
  );
};

export default Footer;
