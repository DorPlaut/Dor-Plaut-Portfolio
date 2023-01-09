import React from 'react';
import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsCheck2Circle } from 'react-icons/bs';
import Footer from './Footer';

function Home({ rotateBackround, setCurrentPageColor }) {
  const skills = [
    'HTML',
    'CSS',
    'Sass',
    'Bootstrap',
    'JavaScript',
    'Node',
    'Express',
    'React',
    'Redux',
    'MongoDB',
    'Mongoose',
    'SQL',
    'PostgreSQL',
    'Bash',
    'GIT',
    'GitHub',
  ];
  return (
    <>
      <motion.div
        className="page"
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
      >
        <header>
          <h1>DOR PLAUT</h1>
          <h2>Web Developer</h2>
        </header>

        <article className="about-container container">
          <h3>About me</h3>
          <div className="underline"></div>
          <div className="about-content">
            <img src="./ProfilePic.png" alt="me" className="profile-pic" />
            <div className="container-about">
              <p className="about">
                <h1 className="about-header">Hello I'm Dor.</h1>
                I'm a self taught web developer, Musician and a guitar builder.
                I started my coding journey in May of 2022 by taking online
                courses. I’m working on my skills in front and back end
                development and learning new things every day. I aspire to
                develop a career in the field, Determined to learn new stuff and
                ready to work to succeed in my goals.
                <br />
                <br />
                <ul className="skill-list">
                  {skills.map((item, index) => {
                    return (
                      <li className="border skill" key={index}>
                        <BsCheck2Circle /> {item}
                      </li>
                    );
                  })}
                </ul>
              </p>
              <div className="contact-btn-container">
                <Link
                  onClick={() => {
                    setCurrentPageColor('blue');
                    rotateBackround();
                  }}
                  to="/contact"
                >
                  <button className="btn contact-btn">contact me now</button>
                </Link>
                {'  '}
                <Link
                  onClick={() => {
                    setCurrentPageColor('purple');
                    rotateBackround();
                  }}
                  to="/projects"
                >
                  <button className="btn contact-btn mobile-project-btn">
                    my projects
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </article>
        <nav className="home-nav">
          <Link
            onClick={() => {
              setCurrentPageColor('purple');
              rotateBackround();
            }}
            className="project-link border"
            to="/projects"
          >
            Click here to chack my projects
          </Link>
        </nav>
        <div className="social-links-container-homepage">
          <SocialLinks />
        </div>
        <Footer />
      </motion.div>
    </>
  );
}

export default Home;
