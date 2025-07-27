import React from 'react';

type TrustSectionProps = {
  t: any;
};

const TrustSection: React.FC<TrustSectionProps> = ({ t }) => (
  <section className="trust-section">
    <h2>{t.trustTitle}</h2>
    <div className="testimonials">
      {t.testimonials.map((test: any, i: number) => (
        <div className="testimonial" key={i}>
          <p>"{test.text}"</p>
          <span>- {test.name}</span>
        </div>
      ))}
    </div>
    <div className="transformations">
      <h3>{t.transformationsTitle}</h3>
      <div className="transformation-images">
        {/* Placeholder images, replace with real before/after photos */}
        <img src="/src/assets/before1.jpg" alt="Before" />
        <img src="/src/assets/after1.jpg" alt="After" />
      </div>
    </div>
  </section>
);

export default TrustSection; 