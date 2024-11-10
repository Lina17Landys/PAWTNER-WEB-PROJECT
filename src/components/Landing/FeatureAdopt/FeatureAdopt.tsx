import React from 'react';
import AdoptPuppy from '../../../assets/images/LandingImg/adopt-puppy.png'
import './FeatureAdopt.css'

const FeatureAdopt: React.FC = () => {
  return (
    <section className="adopt-section" aria-labelledby="adopt-heading">
      <div className='adopt-container'>
      <img className='Adopt-Puppy-img' src={AdoptPuppy} alt="Men with a Puppy" />
        <div className='about-description'>
          <h2 className="adopt-heading">Adopt</h2>
          <article>
            <p className='adopt-text'>
            Pawtner is dedicated to making a meaningful difference in the lives of pets and their families. We connect animals in need with loving homes, provide essential resources for their care and well-being, and offer easy access to veterinary services. Our goal is to create a supportive community that promotes adoption, rescue, and responsible pet ownership.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeatureAdopt;