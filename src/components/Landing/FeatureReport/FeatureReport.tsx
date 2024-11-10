import React from 'react';
import ReportCat from '../../../assets/images/LandingImg/yell-cat.png'
import './FeatureReport.css'

const FeatureReport: React.FC = () => {
  return (
    <section className="feature-report-section" aria-labelledby="report-heading">
      <div className='feature-report-container'>
        <div className='feature-report-description'>
          <h2 className="feature-report-heading">Report</h2>
          <article>
            <p className='feature-report-text'>
            Pawtner is dedicated to making a meaningful difference in the lives of pets and their families. We connect animals in need with loving homes, provide essential resources for their care and well-being, and offer easy access to veterinary services. Our goal is to create a supportive community that promotes adoption, rescue, and responsible pet ownership.</p>
          </article>
        </div>
        <img className='Report-Cat-img' src={ReportCat} alt="Cat yelling" />
      </div>
    </section>
  );
};

export default FeatureReport;