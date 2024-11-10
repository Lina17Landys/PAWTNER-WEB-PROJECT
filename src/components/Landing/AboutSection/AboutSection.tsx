import React from 'react';
import './AboutSection.css'
import HappyDog from '../../../assets/images/LandingImg/about-perro.png'
import Highlight from '../../../assets/Illustrations-details/Highlight.png'

const AboutSection: React.FC = () => {
  return (
    <section className="about-section" aria-labelledby="about-heading">
      <div className='about-container'>
        <div className='about-description'>
          <h2 className="about-heading-1">About</h2>
          <h2 className='about-heading-2'>Our Mission</h2>
          <article>
            <p className='about-text'>
            Our mission is to connect pets in need with loving homes, provide resources for their care and well-being, and facilitate access to services that improve the lives of animals and their families. We are committed to creating a caring community that promotes adoption, rescue and responsible pet care.
            </p>
          </article>
        </div>
        <img className='Happy-Dog-img' src={HappyDog} alt="Happy dog representing our mission" />
        <img className='Highlight-Illustration' src={Highlight} alt="Highlight illustration" />
      </div>
    </section>
  );
};

export default AboutSection;