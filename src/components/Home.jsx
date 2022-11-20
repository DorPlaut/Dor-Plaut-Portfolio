import React from 'react';
import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home({ rotateBackround, setCurrentPageColor }) {
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
            <div>
              <p className="about">
                Hello. My name is Dor and I'm a self taught web developer from
                Israel. I started my coding journey in May of 2022 by taking
                courses online. Since then I worked on my skills in front and
                back end development. And aspire to develop a career in the
                field. my workflow includes: JavaScript, Node, Express, MongoDB,
                React and more..
                <br />
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
            className="project-link"
            to="/projects"
          >
            Click here to chack my projects
          </Link>
        </nav>
        <div className="social-links-container-homepage">
          <SocialLinks />
        </div>
      </motion.div>
    </>
  );
}

export default Home;
