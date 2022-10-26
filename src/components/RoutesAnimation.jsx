import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import handleColorScheme from '../functions/ColorScheme';

import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';

function RoutesAnimation({ setRotationSpeed }) {
  const [currentPageColor, setCurrentPageColor] = useState('green');
  const location = useLocation();

  useEffect(() => {
    handleColorScheme(currentPageColor);
  });

  const rotateBackround = () => {
    setRotationSpeed(350);
    setTimeout(() => {
      setRotationSpeed(2);
    }, 400);
  };

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Home
              rotateBackround={rotateBackround}
              setCurrentPageColor={setCurrentPageColor}
            />
          }
        />
        <Route
          path="/projects"
          element={
            <Projects
              rotateBackround={rotateBackround}
              setCurrentPageColor={setCurrentPageColor}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              rotateBackround={rotateBackround}
              setCurrentPageColor={setCurrentPageColor}
            />
          }
        />
      </Routes>
    </>
  );
}

export default RoutesAnimation;
