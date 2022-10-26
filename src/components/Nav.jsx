import React from 'react';
import { Link } from 'react-router-dom';
import { IoHomeSharp } from 'react-icons/io5';
import { SiGooglemessages } from 'react-icons/si';
import { BsFillFileEarmarkCodeFill } from 'react-icons/bs';

function Nav({ setCurrentPageColor, rotateBackround }) {
  return (
    <div className="general-nav">
      <Link
        onClick={() => {
          setCurrentPageColor('purple');
          rotateBackround();
        }}
        className="nav-btn"
        to="/projects"
        title="Projects"
      >
        <BsFillFileEarmarkCodeFill />
      </Link>
      <Link
        onClick={() => {
          setCurrentPageColor('blue');
          rotateBackround();
        }}
        className="nav-btn"
        to="/contact"
        title="Contact"
      >
        <SiGooglemessages />
      </Link>
      <Link
        onClick={() => {
          setCurrentPageColor('green');
          rotateBackround();
        }}
        className="nav-btn"
        to="/"
        title="Home"
      >
        <IoHomeSharp />
      </Link>
    </div>
  );
}

export default Nav;
