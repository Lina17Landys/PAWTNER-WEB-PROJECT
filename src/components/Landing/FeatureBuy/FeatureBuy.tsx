import React from 'react';
import BuyCat from '../../../assets/images/LandingImg/buy-cat.png'
import './FeatureBuy.css'

const FeatureBuy: React.FC = () => {
  return (
    <section className="feature-buy-section" aria-labelledby="buy-heading">
      <div className='feature-buy-container'>
        <div className='feature-buy-description'>
          <h2 className="feature-buy-heading">Buy</h2>
          <article>
            <p className='feature-buy-text'>
            Pawtner is dedicated to making a meaningful difference in the lives of pets and their families. We connect animals in need with loving homes, provide essential resources for their care and well-being, and offer easy access to veterinary services. Our goal is to create a supportive community that promotes adoption, rescue, and responsible pet ownership.</p>
          </article>
        </div>
        <img className='Buy-Cat-img' src={BuyCat} alt="Cat resting in a pet's bed" />
      </div>
    </section>
  );
};

export default FeatureBuy;