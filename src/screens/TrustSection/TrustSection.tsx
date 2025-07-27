import React, { useState } from 'react';

type TrustSectionProps = {
  t: any;
};

const BEFORE_AFTER_SRC = '/src/assets/before-after.png';
const BEFORE_AFTER_SRC2 = '/src/assets/before-after2.png';
const BEFORE_AFTER_SRC3 = '/src/assets/before-after3.png';

const TrustSection: React.FC<TrustSectionProps> = ({ t }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageCLick = (src: string) => {
    setSelectedImage(src);
    setModalOpen(true);
  };
  return (
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
          <img
            src={BEFORE_AFTER_SRC}
            alt="Client before and after transformation"
            className="transformation-beforeafter"
            style={{ cursor: 'pointer' }}
            onClick={() => handleImageCLick(BEFORE_AFTER_SRC)}
          />
          <img
            src={BEFORE_AFTER_SRC2}
            alt="Client before and after transformation"
            className="transformation-beforeafter"
            style={{ cursor: 'pointer' }}
            onClick={() => handleImageCLick(BEFORE_AFTER_SRC2)}
          />
          <img
            src={BEFORE_AFTER_SRC3}
            alt="Client before and after transformation"
            className="transformation-beforeafter"
            style={{ cursor: 'pointer' }}
            onClick={() => handleImageCLick(BEFORE_AFTER_SRC3)}
          />
        </div>
        {modalOpen && (
          <div className="modal-overlay" onClick={() => setModalOpen(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <img
                src={selectedImage}
                alt="Client before and after transformation"
                className="modal-beforeafter-img"
              />
              <button className="modal-close" onClick={() => setModalOpen(false)}>&times;</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrustSection; 