import React from 'react';
import './Card.css';

const Card = ({ title, text, icon, accent }) => {
  return (
    <div className={`card ${accent ? 'card--accent' : ''}`}>
      {icon && <div className="card__icon">{icon}</div>}
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
      <div className="card__line"></div>
    </div>
  );
};

export default Card;
