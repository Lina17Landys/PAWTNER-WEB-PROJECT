import React from 'react';
import ServicesCard from '../ServiceCard/ServicesCard';
import './ServicesSection.css';

const services = [
  {
    title: 'Adopt a Pet',
    description: 'Find your new best friend from a variety of pets available for adoption.',
    imageUrl: 'src/assets/images/LandingImg/Cards-Icons/Heart-with-dog-paw.png',
  },
  {
    title: 'Caring',
    description: 'Have questions about your pet’s health? Check more information here!',
    imageUrl: 'src/assets/images/LandingImg/Cards-Icons/house.png',
  },
  {
    title: 'Pet Care Products',
    description: 'Browse through a wide range of products to keep your pet healthy and happy.',
    imageUrl: 'src/assets/images/LandingImg/Cards-Icons/health-paw.png',
  },
  {
    title: 'Lost & Found Pets',
    description: 'Did you saw a lost pet or an street animal that needs help? Report it here.',
    imageUrl: 'src/assets/images/LandingImg/Cards-Icons/Bone.png',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
