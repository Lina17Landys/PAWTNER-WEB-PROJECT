import React from "react";
import "./animals.css";

interface AnimalDetailProps {
  name: string;
  size: string;
  age: string;
  image: string;
  personality: string;
  temperament: string[];
  onBack: () => void;
}

const PetsDetail: React.FC<AnimalDetailProps> = ({
  name,
  size,
  age,
  image,
  personality,
  temperament,
  onBack,
}) => {
  return (
    <div className="pet-detail">
      <button className="back-button" onClick={onBack}>
        ←
      </button>
      <div className="pet-detail-container">
        <div className="pet-detail-card">
          <img src={image} alt={name} className="pet-detail-image" />
          <div className="pet-detail-info">
            <h2 className="pet-detail-name">{name}</h2>
            <div className="pet-detail-age-size">
              <p className="pet-detail-age">{age}</p>
              <p className="pet-detail-size">Size: {size}</p>
            </div>
            <div className="pet-detail-personality">
              <h3>Personality</h3>
              <p>{personality}</p>
            </div>
            <h3>Temperament</h3>
            <ul className="pet-detail-temperament">
              {temperament.map((trait, index) => (
                <li key={index} className={`temperament-${index + 1}`}>
                  {trait}
                </li>
              ))}
            </ul>
            <div className="pet-detail-footer">
    <hr className="separator" />
    <h1 className="pet-detail-footer-text">Why it's {name} perfect for you? </h1>
    <p className="pet-foot">Adopting a pet gives a loving animal a second chance at life and brings joy, companionship, and unconditional love into your home. Save a life, gain a loyal friend, and make a difference by adopting today!</p>
    <button className="adopt-button">Adopt Now</button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetsDetail;
