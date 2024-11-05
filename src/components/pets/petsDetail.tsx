import React from 'react';
import './animals.css';

interface AnimalDetailProps {
    name: string;
    size: string;
    age: string;
    image: string;
    personality: string;
    temperament: string[];
    onBack: () => void;
}

const PetsDetail: React.FC<AnimalDetailProps> = ({ name, size, age, image, personality, temperament, onBack }) => {
    return (
        <div className="pet-detail">
            <button className="back-button" onClick={onBack}>Back</button>
            <div className="pet-detail-card">
                <img src={image} alt={name} className="pet-detail-image" />
                <h2 className="pet-detail-name">{name}</h2>
                <p className="pet-detail-size">Size: {size}</p>
                <p className="pet-detail-age">Age: {age}</p>
                <p className="pet-detail-personality">{personality}</p>
                <h3>Temperament:</h3>
                <ul className="pet-detail-temperament">
                    {temperament.map((trait, index) => (
                        <li key={index}>{trait}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PetsDetail;
