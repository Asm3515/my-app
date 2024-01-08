// Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css';
import "../Section/Section.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div className="logo">
        <div className="name">Ajinkya More</div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <span
            id="hamburger-menu-ideal"
            onClick={toggleMenu}
            className={`hamburger-span ${menuOpen ? 'open' : ''}`}
          ></span>

          <li className='hamburger-links'><a onClick={() => scrollToSection('about')}>About</a></li>
          <li className='hamburger-links'><a onClick={() => scrollToSection('experience')}>Experience</a></li>
          <li className='hamburger-links'><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li className='hamburger-links'><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
