import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">

        <div className="about__image-wrap">
          <div className="about__image-main">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80"
              alt="Sterling & Associates attorneys"
            />
          </div>
          <div className="about__image-badge">
            <span className="about__badge-number">30+</span>
            <span className="about__badge-text">Years of Excellence</span>
          </div>
          <div className="about__image-accent"></div>
        </div>

  
        <div className="about__content">
          <SectionTitle
            label="About the Firm"
            title="A Legacy of Legal Excellence"
            subtitle=""
          />

          <Paragraph
            text="Founded in 1992, Sterling & Associates has built a formidable reputation as one of New York's premier corporate law firms. Our team of seasoned attorneys brings unparalleled depth of expertise and a relentless commitment to achieving favorable outcomes for our clients."
            variant="lead"
          />

          <Paragraph
            text="We understand that every legal challenge is unique. Our approach combines meticulous preparation, strategic foresight, and decades of courtroom experience to deliver solutions that protect what matters most to you."
            variant="default"
          />

      
          <div className="about__values">
            <div className="about__value">
              <span className="about__value-icon">⚖</span>
              <div>
                <h4 className="about__value-title">Integrity Above All</h4>
                <p className="about__value-text">Our practice is built on ethical foundations and transparent counsel.</p>
              </div>
            </div>
            <div className="about__value">
              <span className="about__value-icon">◈</span>
              <div>
                <h4 className="about__value-title">Strategic Excellence</h4>
                <p className="about__value-text">Every case receives our full intellectual and creative resources.</p>
              </div>
            </div>
            <div className="about__value">
              <span className="about__value-icon">✦</span>
              <div>
                <h4 className="about__value-title">Client-First Approach</h4>
                <p className="about__value-text">Your interests are always at the center of everything we do.</p>
              </div>
            </div>
          </div>

          <Button text="Meet Our Team →" href="#contact" variant="primary" />
        </div>
      </div>
    </section>
  );
};

export default About;
