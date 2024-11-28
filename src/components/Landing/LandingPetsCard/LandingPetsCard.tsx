import React from 'react';
import './LandingPetsCard.css';

interface LandingPetsCardProps {
  name: string;
  image: string;
}

const LandingPetsCard: React.FC<LandingPetsCardProps> = ({ name, image }) => {
  return (
    <div className="landing-pets-card">
      <img src={image} alt={name} className="landing-pets-card-img" />
      <div className="landing-pets-card-info">{name}</div>
    </div>
  );
};

export default LandingPetsCard;

