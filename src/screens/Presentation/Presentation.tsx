import React from 'react';
import './Presentation.css';
import MediaGallery from '../MediaGallery/MediaGallery';
import Programs from '../Programs/Programs';
import TrustSection from '../TrustSection/TrustSection';

const translations = {
  en: {
    heroTitle: 'Transform Your Body & Mind',
    heroWith: 'with',
    heroTrainer: 'Certified Personal Trainer',
    heroTagline: 'Achieve your fitness goals with expert guidance, motivation, and a personalized plan.',
    heroStart: 'Start Your Journey',
    programsTitle: 'Our Programs',
    programs: [
      { title: '1-on-1 Coaching', price: '$99/mo', desc: 'Personalized training plan and weekly check-ins.' },
      { title: 'Group Classes', price: '$49/mo', desc: 'Live group workouts and community support.' },
      { title: 'Nutrition Guidance', price: '$29/mo', desc: 'Custom meal plans and nutrition tracking.' },
    ],
    trustTitle: 'What Clients Say',
    testimonials: [
      { name: 'Alex', text: 'I lost 20lbs and feel amazing! The coaching is top-notch.' },
      { name: 'Jamie', text: 'The group classes keep me motivated every week.' },
      { name: 'Taylor', text: 'The nutrition advice was a game changer for my energy.' },
    ],
    transformationsTitle: 'Client Transformations',
    stickyCta: 'Choose Your Course',
    profile: [
      'МСМК @wpaukraine',
      'МСМК @wpf_krawa',
      '• pull-ups',
      '• streetlifting',
      '• powerlifting',
      'Personal trainer @alliance.if',
    ],
  },
  ua: {
    heroTitle: 'Зміни своє тіло та розум',
    heroWith: 'з',
    heroTrainer: 'Сертифікований персональний тренер',
    heroTagline: 'Досягайте фітнес-цілей з експертною підтримкою, мотивацією та персоналізованим планом.',
    heroStart: 'Почати шлях',
    programsTitle: 'Наші програми',
    programs: [
      { title: 'Індивідуальні тренування', price: '₴3900/міс', desc: 'Персоналізований план та щотижневі консультації.' },
      { title: 'Групові заняття', price: '₴1900/міс', desc: 'Живі групові тренування та підтримка спільноти.' },
      { title: 'Харчування', price: '₴1200/міс', desc: 'Індивідуальні плани харчування та трекінг.' },
    ],
    trustTitle: 'Відгуки клієнтів',
    testimonials: [
      { name: 'Олексій', text: 'Я схуд на 9 кг і почуваюся чудово! Тренування на найвищому рівні.' },
      { name: 'Жанна', text: 'Групові заняття мотивують мене кожного тижня.' },
      { name: 'Тарас', text: 'Поради з харчування змінили мою енергію.' },
    ],
    transformationsTitle: 'Трансформації клієнтів',
    stickyCta: 'Обрати курс',
    profile: [
      'МСМК @wpaukraine',
      'МСМК @wpf_krawa',
      '• підтягування',
      '• стрітліфтинг',
      '• пауерліфтинг',
      'Персональний тренер @alliance.if',
    ],
  },
};

type PresentationProps = { language: 'en' | 'ua' };

const Presentation: React.FC<PresentationProps> = ({ language }) => {
  const t = translations[language];
  return (
    <div className="presentation-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-profile-unit">
            <div className="hero-image">
              <img src="/src/assets/front_lever.png" alt="Solomiia Doshchakivska performing front lever" />
            </div>
            <div>
              <h1>{t.heroTitle}</h1>
              <p>
                {t.heroWith} <strong>Solomiia Doshchakivska</strong> – {t.heroTrainer}
                <span role="img" aria-label="cat"> 🐈‍⬛🖤</span>
              </p>
              <ul style={{listStyle: 'none', padding: 0, margin: '0.5rem 0 1rem 0', fontSize: '1.05rem', lineHeight: 1.5}}>
                {t.profile.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
          <p className="tagline">{t.heroTagline}</p>
          <a href="#course-selection" className="cta-btn">{t.heroStart}</a>
        </div>
      </section>

      {/* Media Gallery */}
      <MediaGallery language={language} />

      {/* Program Highlights */}
      <Programs t={t} />

      {/* Trust Elements */}
      <TrustSection t={t} />

      {/* Sticky CTA Button */}
      <a href="#course-selection" className="sticky-cta">{t.stickyCta}</a>
    </div>
  );
};

export default Presentation; 