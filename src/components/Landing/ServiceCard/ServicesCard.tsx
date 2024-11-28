import React, { useState } from 'react';
import './ServicesCard.css';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ServicesCard: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  const [transformStyle, setTransformStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const rotationX = -(y / height) * 20;
    const rotationY = (x / width) * 20;

    setTransformStyle({
      transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(1.05)`,
      boxShadow: '0 15px 30px rgba(8, 59, 130, 0.3)',
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: 'rotateX(0) rotateY(0) scale(1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      boxShadow: '0 4px 10px rgba(8, 59, 130, 0.2)',
    });
  };

  return (
    <div
      className="services-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}>
      <img src={imageUrl} alt={title} className="services-card-image" />
      <div className="services-card-content">
        <h3 className="services-card-title">{title}</h3>
        <p className="services-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
