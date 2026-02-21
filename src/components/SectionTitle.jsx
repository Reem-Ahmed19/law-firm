import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ label, title, subtitle, centered }) => {
  return (
    <div className={`section-title ${centered ? 'section-title--centered' : ''}`}>
      {label && <span className="section-title__label">{label}</span>}
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
      <div className="section-title__ornament">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default SectionTitle;
