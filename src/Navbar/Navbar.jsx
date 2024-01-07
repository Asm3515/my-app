// Navbar.jsx

import React from 'react';
import './Navbar.css';
import { useState } from 'react';
import "../Section/Section.css"


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
    <nav>
      <div className="logo">
        <div className="name">Ajinkya More</div>
        <ul className="nav-links">
              <li><a onClick={() => scrollToSection('about')}>About</a></li>
              <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
              <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </div>
      <nav className='hamburger-nav'>
        <div className='hamburger-menu'>
            <div className='hamburger-icon' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
                <div className={`menu-links ${menuOpen ? 'false' : ''}`}>
                    <li><a href='/about' onClick={toggleMenu}>About</a></li>
                    <li><a href='/experience' onClick={toggleMenu}>Experience</a></li>
                    <li><a href='/projects' onClick={toggleMenu}>Projects</a></li>
                    <li><a href='/contact' onClick={toggleMenu}>Contact</a></li>
                </div>
            </div>
        </div>
      </nav>
    </nav>
    </nav>
  );
};
