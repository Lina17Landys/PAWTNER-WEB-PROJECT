import React from 'react';
import CaringDog from '../../../assets/images/LandingImg/sick-dog.png'
import './FeatureCaring.css'

const FeatureCaring: React.FC = () => {
  return (
    <section className="feature-caring-section" aria-labelledby="caring-heading">
      <div className='feature-caring-container'>
      <img className='Caring-Dog-img' src={CaringDog} alt="Sick dog" />
        <div className='feature-caring-description'>
          <h2 className="feature-caring-heading">Caring</h2>
          <article>
            <p className='feature-caring-text'>
            Pawtner is dedicated to making a meaningful difference in the lives of pets and their families. We connect animals in need with loving homes, provide essential resources for their care and well-being, and offer easy access to veterinary services. Our goal is to create a supportive community that promotes adoption, rescue, and responsible pet ownership.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeatureCaring;