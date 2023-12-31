// Navbar.jsx

import React from 'react';
import './Navbar.css';
import { useState } from 'react';


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className='desktop-nav'>
    <nav>
      <div className="logo">
        <div className="name">Ajinkya More</div>
        <ul className="nav-links">
          <li><a href='/about'>About</a></li>
          <li><a href='/experience'>Experience</a></li>
          <li><a href='/projects'>Projects</a></li>
          <li><a href='/contact'>Contact</a></li>
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
