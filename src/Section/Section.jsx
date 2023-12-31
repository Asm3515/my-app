import React from 'react';
import "./Section.css"
const Section = () => {
  return (
    <div>
        <section id='profile'>
            <div className='section-pic-container'>
                <section>
                <img className="profile-pic" src={require("../Assets/profile-pic.jpg")} alt="Ajinkya More's profile picture" />
                <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Ajinkya More</h1>
        <p class="section__text__p2">Master's Student at Purdue University</p>
        <div class="btn-container">
          <button
            class="btn btn-color-2"
            onclick="window.open('./assets/resume-example.pdf')"
          >
            Download CV
          </button>
          <a href="https://bobbyhadz.com" target="_blank" rel="noopener noreferrer">
          <button class="btn btn-color-1">
            Contact Info
          </button>
      </a>
          
        </div>
        <div id="socials-container">
          <a href='https://linkedin.com/in/ajinkyasmore'>
            <img
              src={require("../Assets/linkedin.png")}
              alt="My LinkedIn profile"
              class="icon"
            />
          </a>
          <a href='https://github.com/asm3515'>
          <img
            src={require("../Assets/github.png")}
            alt="My Github profile"
            class="icon"
          />
          </a>
        </div>
      </div>
                </section>
            </div>
        </section>
    </div>
  )
}

export default Section