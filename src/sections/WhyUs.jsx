import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Paragraph from '../components/Paragraph';
import './WhyUs.css';

const WhyUs = () => {
  const reasons = [
    {
      number: '01',
      title: 'Proven Track Record',
      text: 'Over 1,200 successful cases across all practice areas, with a 98% client satisfaction rate spanning three decades.',
    },
    {
      number: '02',
      title: 'Elite Legal Team',
      text: 'Our attorneys are graduates of the nation\'s top law schools and bring diverse expertise from BigLaw, government, and judiciary roles.',
    },
    {
      number: '03',
      title: 'Personalized Strategy',
      text: 'We craft bespoke legal strategies tailored to your unique situation — never one-size-fits-all solutions.',
    },
    {
      number: '04',
      title: 'Transparent Communication',
      text: 'You will always know where your case stands. We provide timely, clear updates and honest assessments throughout.',
    },
  ];

  const testimonials = [
    {
      quote: 'Sterling & Associates guided us through a complex merger with extraordinary skill and discretion. Their strategic advice was invaluable at every stage.',
      author: 'Jonathan Whitfield',
      role: 'CEO, Meridian Capital',
    },
    {
      quote: 'The level of dedication and legal acumen at this firm is unmatched. They protected our IP portfolio and achieved a settlement well beyond our expectations.',
      author: 'Dr. Priya Sharma',
      role: 'Founder, NovaTech Innovations',
    },
  ];

  return (
    <section className="whyus" id="whyus">
      <div className="whyus__container">
        <div className="whyus__reasons">
          <SectionTitle
            label="Why Choose Us"
            title="The Sterling Difference"
            subtitle="Choosing the right legal counsel can define the outcome of your most critical decisions."
          />

          <div className="whyus__list">
            {reasons.map((reason, index) => (
              <div className="whyus__item" key={index}>
                <span className="whyus__item-number">{reason.number}</span>
                <div className="whyus__item-content">
                  <h3 className="whyus__item-title">{reason.title}</h3>
                  <Paragraph text={reason.text} variant="default" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="whyus__testimonials">
          <div className="whyus__testimonials-inner">
            <span className="whyus__quote-mark">"</span>
            {testimonials.map((t, index) => (
              <div className="whyus__testimonial" key={index}>
                <p className="whyus__testimonial-text">{t.quote}</p>
                <div className="whyus__testimonial-author">
                  <span className="whyus__author-name">{t.author}</span>
                  <span className="whyus__author-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
