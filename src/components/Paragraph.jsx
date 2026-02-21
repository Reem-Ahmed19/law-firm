import React from 'react';
import './Paragraph.css';

const Paragraph = ({ text, variant, className }) => {
  return (
    <p className={`paragraph paragraph--${variant || 'default'} ${className || ''}`}>
      {text}
    </p>
  );
};

export default Paragraph;
