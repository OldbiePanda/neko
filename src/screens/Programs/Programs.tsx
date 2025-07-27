import React from 'react';

type ProgramsProps = {
  t: any;
};

const Programs: React.FC<ProgramsProps> = ({ t }) => (
  <section className="programs-section">
    <h2>{t.programsTitle}</h2>
    <div className="program-cards">
      {t.programs.map((prog: any) => (
        <div className="program-card" key={prog.title}>
          <h3>{prog.title}</h3>
          <p>{prog.desc}</p>
          <div className="price">{prog.price}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Programs; 