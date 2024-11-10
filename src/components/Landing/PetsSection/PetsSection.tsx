import React from 'react';
import './PetsSection.css'

const pets = [
  { name: 'Hunter', imgSrc: 'src/assets/images/LandingImg/Cards-Pets/c1.png', alt: 'Hunter the dog' },
  { name: 'Tonio', imgSrc: 'src/assets/images/LandingImg/Cards-Pets/c2.png', alt: 'Tonio the dog' },
  { name: 'Apolo', imgSrc: 'src/assets/images/LandingImg/Cards-Pets/c3.png', alt: 'Apolo the cat' },
];

const PetsSection: React.FC = () => {
  return (
    <section className="pets-section" aria-labelledby="pets-heading">
      <h2 id="pets-heading">Meet a New Friend!</h2>
      <div className="pet-list">
        {pets.map((pet) => (
          <article key={pet.name} className="pet-card">
            <img className='pets-section-img' src={pet.imgSrc} alt={pet.alt} />
            <h3>{pet.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PetsSection;
