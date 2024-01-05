import React from 'react';
import "./Section.css";


const Section = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <section id='profile' className='profile-section'>
        <div className='section-pic-container'>
          <img className="profile-pic" src={require("../Assets/profile-pic.jpg")} alt="Ajinkya More profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Ajinkya More</h1>
          <p className="section__text__p2">Master's Student at Purdue University</p>
          <div className="btn-container">
            <a href="/Ajinkya_DS_Resume.pdf" download="Ajinkya_DS_Resume.pdf">
            <button
              className="btn btn-color-2"
            >
              Download CV
            </button>
            </a>
            <a onClick={() => scrollToSection('contact')} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-color-1">
                Contact Info
              </button>
            </a>
          </div>
          <div id="socials-container">
            <a href='https://linkedin.com/in/ajinkyasmore'>
              <img
                src={require("../Assets/linkedin.png")}
                alt="My LinkedIn profile"
                className="icon"
              />
            </a>
            <a href='https://github.com/asm3515'>
              <img
                src={require("../Assets/github.png")}
                alt="My Github profile"
                className="icon"
              />
            </a>
          </div>
        </div>
        
      </section>
      <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={require("../Assets/education.png")}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>M.Sc. Master's in Computer Science<br />Purdue University<br />GPA - 3.33</p>
            </div>
            <div className="details-container">
              <img
                src={require("../Assets/experience.png")}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>2+ years <br />Data and Test Analyst <br/>Tata Consultancy Services (CIBC Project)</p>
            </div> 
            <div className="details-container">
              <img
                src={require("../Assets/education.png")}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>B.Sc. Bachelors Degree<br />Mumbai University<br />GPA - 7.5</p>
            </div>
            
          </div>
          <div className="text-container">
            <p>
            I am currently a Master of Science Student in Computer Science at Purdue University at Fort Wayne Campus equipped with skills in algorithm design, natural language processing, and software engineering. Additionally, my bachelor's degree in Mechatronics Engineering from Mumbai University provided a solid foundation in computer vision and robotics systems.
            </p>
          </div>
        </div>
      </div>
      
      
    </section>
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">FullStack Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={require("../Assets/checkmark.png")}
                  alt="Experience icon"
                  className="icon"
                />
                <div className='article-text'>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={require("../Assets/checkmark.png")}
                  alt="Experience icon"
                  className="icon"
                />
                <div className='article-text'>
                  <h3>CSS</h3>
                  <p>Beginner</p>
                </div>
              </article>
              <article>
                <img
                  src={require("../Assets/checkmark.png")}
                  alt="Experience icon"
                  className="icon"
                />
                <div className='article-text'>
                  <h3>JavaScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={require("../Assets/checkmark.png")}
                  alt="Experience icon"
                  className="icon"
                />
                <div className='article-text'>
                  <h3>NodeJs</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={require("../Assets/checkmark.png")}
                  alt="Experience icon"
                  className="icon"
                />
                <div className='article-text'>
                  <h3>MongoDB</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={require("../Assets/checkmark.png")}
                  alt="Experience icon"
                  className="icon"
                />
                <div className='article-text'>
                  <h3>ExpressJs</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={require("../Assets/checkmark.png")}
                  alt="Experience icon"
                  className="icon"
                />
                <div className='article-text'>
                  <h3>React</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
            <article>
                <img
                  src={require("../Assets/checkmark.png")}
                  alt="Experience icon"
                  className="icon"
                />
                <div className='article-text'>
                  <h3>MySQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={require("../Assets/checkmark.png")}
                  alt="Experience icon"
                  className="icon"
                />
                <div className='article-text'>
                  <h3>PostgreSql</h3>
                  <p>Beginner</p>
                </div>
              </article>
              {/* Add more articles for Backend Development skills */}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Data Science and Visualization</h2>
            <div className="article-container">
            <article>
                <img
                  src={require("../Assets/checkmark.png")}
                  alt="Experience icon"
                  className="icon"
                />
                <div className='article-text'>
                  <h3>Python</h3>
                  <p>Advance</p>
                </div>
              </article>
              <article>
                <img
                  src={require("../Assets/checkmark.png")}
                  alt="Experience icon"
                  className="icon"
                />
                <div className='article-text'>
                  <h3>Keras</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={require("../Assets/checkmark.png")}
                  alt="Experience icon"
                  className="icon"
                />
                <div className='article-text'>
                  <h3>NLTK</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={require("../Assets/checkmark.png")}
                  alt="Experience icon"
                  className="icon"
                />
                <div className='article-text'>
                  <h3>R</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={require("../Assets/checkmark.png")}
                  alt="Experience icon"
                  className="icon"
                />
                <div className='article-text'>
                  <h3>Tableau</h3>
                  <p>Intermediate</p>
                </div>
              </article>

            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Programming IDE's</h2>
            <div className="article-container">
              <article>
                <img
                  src={require("../Assets/checkmark.png")}
                  alt="Experience icon"
                  className="icon"
                />
                <div className='article-text'>
                  <h3>Pycharm</h3>
                  <p>Version 2023.2.1</p>
                </div>
              </article>
              <article>
                <img
                  src={require("../Assets/checkmark.png")}
                  alt="Experience icon"
                  className="icon"
                />
                <div className='article-text'>
                  <h3>Google Colab</h3>
                  <p>Version 3.10.12</p>
                </div>
              </article>
              <article>
                <img
                  src={require("../Assets/checkmark.png")}
                  alt="Experience icon"
                  className="icon"
                />
                <div className='article-text'>
                  <h3>VS Code</h3>
                  <p>Version 1.85</p>
                </div>
              </article>
              <article>
                <img
                  src={require("../Assets/checkmark.png")}
                  alt="Experience icon"
                  className="icon"
                />
                <div className='article-text'>
                  <h3>R Studio</h3>
                  <p>Version 2023.09.1</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="projects">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">NLP - Autograder(QA google Palm)</h2>
            <div className="article-container-project">
              <article>
                <img
                  src={require("../Assets/Autograder.png")}
                  alt="Experience icon"
                  className="icon-project"
                />
                <div className='article-text'>
                  <a href="https://github.com/arjunmalik11/AutoGrader/tree/main">GIT LINK</a>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">DataScience - Heart Disease Prediction</h2>
            <div className="article-container">
              <article>
                <img
                  src={require("../Assets/HeartDis.jpg")}
                  alt="Experience icon"
                  className="icon-project"
                />
                <div className='article-text'>
                  <a href="https://github.com/Asm3515/DataScience---Heart-Disease">GIT LINK</a>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Netflix Dashboard</h2>
            <div className="article-container">
              <article>
                <img
                  src={require("../Assets/Netflix_DashBoard.png")}
                  alt="Experience icon"
                  className="icon-project"
                />
                <div className='article-text'>
                  <a href="https://github.com/Asm3515/Netflix_Dashboard">GIT LINK</a>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Resume Review System</h2>
            <div className="article-container">
              <article>
                <img
                  src={require("../Assets/Resume-review.png")}
                  alt="Experience icon"
                  className="icon-project"
                />
                <div className='article-text'>
                  <a href="https://github.com/Asm3515/resume-review">GIT LINK</a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={require("../Assets/email.png")}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:ajinkya.more3515@gmail.com">Gmail</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={require("../Assets/linkedin.png")}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/ajinkyasmore">LinkedIn</a></p>
        </div>
      </div>
    </section>
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
              <li><a onClick={() => scrollToSection('about')}>About</a></li>
              <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
              <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>
      <a className="last-link" href='https://www.youtube.com/watch?v=ldwlOzRvYOU&t=240s'><p>I Converted this basic HTML,JS,CSS tutorial to React Website</p></a>
      <p>Copyright &#169; 2024 Ajinkya S More. All Rights Reserved.</p>
    </footer>
    </div>
  );
}

export default Section;
