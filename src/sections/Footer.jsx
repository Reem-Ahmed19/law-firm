import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    Practice: ['Corporate Law', 'Litigation', 'M&A', 'Intellectual Property', 'Real Estate', 'Employment Law'],
    Firm: ['About Us', 'Our Attorneys', 'Case Results', 'Careers', 'News & Insights'],
    Contact: ['425 Lexington Ave, 22nd Fl', 'New York, NY 10017', '+1 (212) 555-0192', 'counsel@sterlingassoc.com'],
  };

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__container">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-main">Sterling</span>
              <span className="footer__logo-amp"> & </span>
              <span className="footer__logo-sub">Associates</span>
            </div>
            <p className="footer__tagline">
              Three decades of unwavering commitment to legal excellence and client success in New York and beyond.
            </p>
            <div className="footer__bar"></div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div className="footer__column" key={category}>
              <h4 className="footer__column-title">{category}</h4>
              <ul className="footer__list">
                {items.map((item, i) => (
                  <li key={i} className="footer__list-item">
                    {category === 'Contact' ? (
                      <span>{item}</span>
                    ) : (
                      <a href="#home" className="footer__link">{item}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p className="footer__copyright">
            © {currentYear} Sterling & Associates LLP. All rights reserved.
          </p>
          <div className="footer__legal-links">
            <a href="#home" className="footer__legal-link">Privacy Policy</a>
            <span className="footer__dot">·</span>
            <a href="#home" className="footer__legal-link">Terms of Use</a>
            <span className="footer__dot">·</span>
            <a href="#home" className="footer__legal-link">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
