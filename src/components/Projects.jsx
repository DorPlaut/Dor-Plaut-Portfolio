import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoHomeSharp } from 'react-icons/io5';
import Project from './Project';
import projectsData from '../localData/Projects';
import Nav from './Nav';
import Footer from './Footer';

function Projects({
  rotateBackround = { rotateBackround },
  setCurrentPageColor,
}) {
  const [category, setCategory] = useState('all');
  const [showAll, setShowAll] = useState(true);

  return (
    <motion.div
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
    >
      <div className="page">
        <header className="header-projects">
          <a
            href="#"
            onClick={() => {
              setShowAll(true);
              setCategory('all');
              setCurrentPageColor('purple');
              rotateBackround();
            }}
            className={category == 'all' ? 'selected' : 'navlink'}
          >
            <h1>Projects</h1>
          </a>
          <nav>
            <ul className="projects-nav">
              <li>
                <h3>
                  <a
                    href="#"
                    onClick={() => {
                      setShowAll(false);
                      setCategory('fullstack');
                      setCurrentPageColor('blue');
                      rotateBackround();
                    }}
                    className={category == 'fullstack' ? 'selected' : 'navlink'}
                  >
                    Full Stack Projects
                  </a>
                </h3>
              </li>
              <li>
                <h3>
                  <a
                    href="#"
                    onClick={() => {
                      setShowAll(false);
                      setCategory('backend');
                      setCurrentPageColor('red');
                      rotateBackround();
                    }}
                    className={category == 'backend' ? 'selected' : 'navlink'}
                  >
                    Back End Projects
                  </a>
                </h3>
              </li>
              <li>
                <h3>
                  <a
                    href="#"
                    onClick={() => {
                      setShowAll(false);
                      setCategory('frontend');
                      setCurrentPageColor('yellow');
                      rotateBackround();
                    }}
                    className={category == 'frontend' ? 'selected' : 'navlink'}
                  >
                    Front End Projects
                  </a>
                </h3>
              </li>
            </ul>
          </nav>
        </header>
        <div className="home-btn-container"></div>
        <Nav
          rotateBackround={rotateBackround}
          setCurrentPageColor={setCurrentPageColor}
        />
        <div className="projects-container">
          {showAll
            ? projectsData.map((i) => {
                return (
                  <Project
                    key={i.title}
                    title={i.title}
                    img={i.img}
                    desc={i.desc}
                    leng={i.leng}
                    gitLink={i.gitLink}
                    demoLink={i.demoLink}
                    category={i.category}
                  />
                );
              })
            : projectsData
                .filter((i) => i.category == category)
                .map((i) => {
                  return (
                    <Project
                      key={i.title}
                      title={i.title}
                      img={i.img}
                      desc={i.desc}
                      leng={i.leng}
                      gitLink={i.gitLink}
                      demoLink={i.demoLink}
                      category={i.category}
                    />
                  );
                })}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Projects;
