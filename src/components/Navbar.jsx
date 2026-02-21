import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Practice Areas', href: '#practice' },
    { label: 'Why Us', href: '#whyus' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-main">Sterling</span>
          <span className="navbar__logo-amp">&</span>
          <span className="navbar__logo-sub">Associates</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar__link" onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="navbar__controls">
          {/* Theme Toggle */}
          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '☽' : '☀'}
          </button>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && <div className="navbar__overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;
