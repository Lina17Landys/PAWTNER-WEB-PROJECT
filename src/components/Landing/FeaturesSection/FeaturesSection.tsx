import React from 'react';
import './FeaturesSection.css'
import FeatureAdopt from '../FeatureAdopt/FeatureAdopt';
import FeatureReport from '../FeatureReport/FeatureReport';
import FeatureCaring from '../FeatureCaring/FeatureCaring';
import FeatureBuy from '../FeatureBuy/FeatureBuy';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" aria-labelledby="features-heading">
      <FeatureAdopt></FeatureAdopt>
      <FeatureReport></FeatureReport>
      <div className='caring-section'>
             <FeatureCaring></FeatureCaring>
      </div>
      <FeatureBuy></FeatureBuy>
    </section>
  );
};

export default FeaturesSection;
