import React from 'react';
import LandingPetsCard from '../LandingPetsCard/LandingPetsCard';
import './LandingPetsSection.css';
import ShootingStarLanding from '../../../assets/Illustrations-details/star2.png'

const petsData = [
  { name: 'Hunter', image: 'src/assets/images/LandingImg/Cards-Pets/PetsCard-1.png' },
  { name: 'Tonio', image: 'src/assets/images/LandingImg/Cards-Pets/PetsCard-2.png' },
  { name: 'Apolo', image: 'src/assets/images/LandingImg/Cards-Pets/PetsCard-3.png' },
];

const LandingPetsSection: React.FC = () => {
  return (
    <section className="landing-pets-section">
      <div className='landing-pets-titleSection'>
        <h2 className='landing-pets-title-1'>Meet a</h2>
        <img className='landing-shootingStar' src={ShootingStarLanding} alt="Shooting Star illustration" />
      </div>
      <h2 className='landing-pets-title-2'>New Friend</h2>
      <div className="landing-pets-cards-container">
        {petsData.map((pet, index) => (
          <LandingPetsCard
            key={index}
            name={pet.name}
            image={pet.image}
          />
        ))}
      </div>
    </section>
  );
};

export default LandingPetsSection;
