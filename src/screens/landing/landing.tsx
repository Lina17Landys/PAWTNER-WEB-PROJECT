import React, { Suspense } from 'react';
import './Landing.css'
import NavBar from '../../components/Landing/LandingNavBar/LandingNavBar';
import HeroSection from '../../components/Landing/HeroSection/HeroSection';
import Footer from '../../components/Landing/Footer/Footer';

const ServicesSection = React.lazy(() => import('../../components/Landing/ServicesSection/ServicesSection'));
const PawtnerDescription = React.lazy(() => import ('../../components/Landing/PawtnerDescription/PawtnerDescription'))
const AboutSection = React.lazy(() => import('../../components/Landing/AboutSection/AboutSection'));
const LandingPetsSection = React.lazy(() => import('../../components/Landing/LandingPetsSection/LandingPetsSection'));
const FeaturesSection = React.lazy(() => import('../../components/Landing/FeaturesSection/FeaturesSection'));

const Landing: React.FC = () => {
  return (
    <>
      <main className='landing-page'>
        <NavBar></NavBar>
        <HeroSection />
        <Suspense fallback={<div>Loading...</div>}>
          <ServicesSection />
          <PawtnerDescription />
          <AboutSection />
          <LandingPetsSection />
          <FeaturesSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Landing;
