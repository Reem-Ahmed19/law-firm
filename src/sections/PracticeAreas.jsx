import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import './PracticeAreas.css';

const PracticeAreas = () => {
  const areas = [
    {
      icon: '⚖',
      title: 'Corporate Law',
      text: 'Comprehensive legal services for corporations, from formation and governance to mergers, acquisitions, and complex transactions.',
    },
    {
      icon: '◎',
      title: 'Litigation & Dispute Resolution',
      text: 'Aggressive, strategic representation in complex commercial disputes, arbitrations, and high-stakes trial proceedings.',
    },
    {
      icon: '✦',
      title: 'Mergers & Acquisitions',
      text: 'Expert counsel throughout the M&A lifecycle — due diligence, negotiation, regulatory compliance, and post-merger integration.',
    },
    {
      icon: '◈',
      title: 'Intellectual Property',
      text: 'Protecting your innovations through patents, trademarks, copyrights, and trade secrets with a global perspective.',
    },
    {
      icon: '▣',
      title: 'Real Estate Law',
      text: 'Navigating complex commercial and residential real estate transactions, development projects, and property disputes.',
    },
    {
      icon: '◉',
      title: 'Employment Law',
      text: 'Advising employers and executives on labor relations, employment contracts, non-competes, and workplace disputes.',
    },
  ];

  return (
    <section className="practice" id="practice">
      <div className="practice__container">
        <SectionTitle
          label="What We Do"
          title="Our Areas of Practice"
          subtitle="We offer a full spectrum of legal services, combining specialized expertise with a deep understanding of our clients' business objectives."
          centered
        />

        <div className="practice__grid">
          {areas.map((area, index) => (
            <Card
              key={index}
              icon={area.icon}
              title={area.title}
              text={area.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
