import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" aria-labelledby="features-heading">
      <h2 id="features-heading">Features</h2>
      <div className="features-list">
        <article className="feature-card">
          <h3>Adopt</h3>
          <p>Help animals find loving homes and families.</p>
        </article>
        <article className="feature-card">
          <h3>Report</h3>
          <p>Report lost animals or those in need of help.</p>
        </article>
        <article className="feature-card">
          <h3>Caring</h3>
          <p>Get resources to provide the best care for your pets.</p>
        </article>
        <article className="feature-card">
          <h3>Buy</h3>
          <p>Shop for the best pet care products available.</p>
        </article>
      </div>
    </section>
  );
};

export default FeaturesSection;
