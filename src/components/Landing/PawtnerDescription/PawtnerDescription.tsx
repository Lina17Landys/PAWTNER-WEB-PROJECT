import React from 'react';
import SectionHeader from '../../Landing/SectionHeader/SectionHeader';
import './PawtnerDescription.css';

const PawtnerDescription: React.FC = () => {
  return (
    <section className="pawtner-description">
      <SectionHeader
        imageUrl="src/assets/images/LandingImg/cat-doodles.png"
        title="Pawtner"
        text="Pawtner is dedicated to making a meaningful difference in the lives of pets and their families. We connect animals in need with loving homes, provide essential resources for their care and well-being, and offer easy access to veterinary services. Our goal is to create a supportive community that promotes adoption, rescue, and responsible pet ownership."
      />
    </section>
  );
};

export default PawtnerDescription;