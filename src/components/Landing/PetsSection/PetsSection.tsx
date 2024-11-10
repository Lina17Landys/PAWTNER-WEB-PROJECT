import React from 'react';

const pets = [
  { name: 'Hunter', imgSrc: '/path/to/hunter.png', alt: 'Hunter the dog' },
  { name: 'Tonio', imgSrc: '/path/to/tonio.png', alt: 'Tonio the cat' },
  { name: 'Apolo', imgSrc: '/path/to/apolo.png', alt: 'Apolo the parrot' },
];

const PetsSection: React.FC = () => {
  return (
    <section id="pets" aria-labelledby="pets-heading">
      <h2 id="pets-heading">Meet a New Friend!</h2>
      <div className="pet-list">
        {pets.map((pet) => (
          <article key={pet.name} className="pet-card">
            <img src={pet.imgSrc} alt={pet.alt} />
            <h3>{pet.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PetsSection;
