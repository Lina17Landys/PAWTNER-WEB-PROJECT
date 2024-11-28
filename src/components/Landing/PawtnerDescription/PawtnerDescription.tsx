import React from 'react';
import './PawtnerDescription.css';
import PawtnerCat from '../../../assets/images/LandingImg/Cat-description-part.png'
import HighlightImage from '../../../assets/Illustrations-details/Highlight-Azul.png'
import HeartImage from '../../../assets/Illustrations-details/Heart-Azul.png'

const PawtnerDescription: React.FC = () => {
  return (
    <section className="pawtner-description" aria-labelledby="caring-heading">
    <div className='pawtner-description-container'>
    <img className="pawtner-description-highlight" src={HighlightImage} alt="Star" />
    <img className='Pawtner-Cat-img' src={PawtnerCat} alt="Cat looking forward" />
    <img className="pawtner-description-blueheart" src={HeartImage} alt="Blue heart" />
      <div className='pawtner-description-description'>
        <h2 className="pawtner-description-heading">Pawtner</h2>
        <article>
          <p className='pawtner-description-text'>
          Pawtner is dedicated to making a meaningful difference in the lives of pets and their families. We connect animals in need with loving homes, provide essential resources for their care and well-being, and offer easy access to veterinary services. Our goal is to create a supportive community that promotes adoption, rescue, and responsible pet ownership.
          </p>
        </article>
      </div>
    </div>
  </section>
  );
};

export default PawtnerDescription;