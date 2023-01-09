import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';
import Nav from './Nav';
import Footer from './Footer';

function Contact({ rotateBackround, setCurrentPageColor }) {
  return (
    <motion.div
      className="contact-page"
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
    >
      <header className="header-contact">
        <h1>Dor Plaut</h1>
        <h2>Web Developer</h2>
      </header>
      <Nav
        rotateBackround={rotateBackround}
        setCurrentPageColor={setCurrentPageColor}
      />
      <article className="contact-container container">
        <h3>Contact Info</h3>
        <div className="underline"></div>
        <div className="contact-info">
          <p>Dor Plaut. Petah tikva, Israel. (+972)542416677</p>
          <ul>
            <li>
              Email:{' '}
              <a href="mailto:DorPlaut@gmail.com" target="blank">
                DorPlaut@gmail.com
              </a>
            </li>
            <li>
              Github:{' '}
              <a href="https://github.com/DorPlaut" target="blank">
                github.com/DorPlaut
              </a>
            </li>
            <li>
              Linkedin:{' '}
              <a href="https://linkedin.com/in/dorplaut" target="blank">
                linkedin.com/in/dorplaut
              </a>
            </li>
            <li>
              Facebook:{' '}
              <a href="https://www.facebook.com/dorplaut/" target="blank">
                facebook.com/dorplaut/
              </a>
            </li>
          </ul>
        </div>
      </article>
      <article className="contact-container container">
        <h3>Send me a message</h3>
        <div className="underline"></div>
        <div className="send-me-a-massgage"></div>

        <ContactForm />
      </article>
      <SocialLinks />

      <Footer />
    </motion.div>
  );
}

export default Contact;
