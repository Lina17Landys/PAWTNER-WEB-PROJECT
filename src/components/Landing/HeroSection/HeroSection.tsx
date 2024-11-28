import React from 'react';
import './HeroSection.css'
import DogHeroSection from '../../../assets/images/LandingImg/big-dog.png'
import CrownImage from '../../../assets/Illustrations-details/Crown.png'
import StarImage from '../../../assets/Illustrations-details/stars.png'

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className='container-hero'>
        <div className='hero-info'>
          <h1 className='hero-title'>Make the Difference</h1>
          <img src={StarImage} alt="Star" className="title-star" />
          <p className='hero-description'>
          You can adopt pets, report lost or stray animals, access veterinary services, and shop for pet care products. Find your new friend, help reunite pets with their owners, schedule veterinary appointments and discover offers in our store.
          </p>
          <p>Join us and make a difference today!</p>
        </div>
      </div>
      <img className='dog-crown' src={CrownImage} alt="Crown" />
      <img className='Dog-hero-img' src={DogHeroSection} alt="Dog looking forward" />
    </section>
  );
};

export default HeroSection;
