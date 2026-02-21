import React from 'react';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__overlay"></div>

   
      <div className="hero__border hero__border--top"></div>
      <div className="hero__border hero__border--bottom"></div>

      <div className="hero__content">
        <span className="hero__label">Est. 1992 · New York</span>
        <h1 className="hero__title">
          Trusted Legal<br />Solutions
        </h1>
        <Paragraph
          text="With over three decades of excellence in corporate law, we provide strategic counsel and unwavering commitment to protecting your interests and achieving your objectives."
          variant="hero"
        />
        <div className="hero__actions">
          <Button text="Contact Us →" href="#contact" variant="primary" />
          <Button text="Our Practice" href="#practice" variant="outline" />
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">30+</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">1,200+</span>
            <span className="hero__stat-label">Cases Won</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">98%</span>
            <span className="hero__stat-label">Client Satisfaction</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span className="hero__scroll-line"></span>
        <span className="hero__scroll-text">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
