import React from 'react';
import { motion } from 'framer-motion';

function Project({ title, img, desc, gitLink, demoLink, leng }) {
  return (
    <motion.article
      className="project-container container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3>{title}</h3>
      <div className="underline"></div>
      <div>
        <img src={img} alt={title} className="project-pic" />
        <p className="description">
          {desc}
          <br />
          <span className="project-leng">{leng}</span>
        </p>
        <div className="projects-btn-container">
          <a href={demoLink} target="blank" className="btn ">
            Live Demo
          </a>
          <a href={gitLink} target="blank" className="btn ">
            Source Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default Project;
