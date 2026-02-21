import React from 'react';
import './Button.css';

const Button = ({ text, onClick, variant, href }) => {
  if (href) {
    return (
      <a href={href} className={`btn btn--${variant || 'primary'}`}>
        {text}
      </a>
    );
  }

  return (
    <button className={`btn btn--${variant || 'primary'}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
