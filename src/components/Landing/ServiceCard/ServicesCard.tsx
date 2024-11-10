import React from 'react';
import './ServicesCard.css';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ServicesCard: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="services-card">
      <img src={imageUrl} alt={title} className="services-card-image" />
      <div className="services-card-content">
        <h3 className="services-card-title">{title}</h3>
        <p className="services-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
