import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function SocialLinks() {
  return (
    <div>
      <a
        href="https://github.com/DorPlaut"
        target="blank"
        className="social-link"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/dorplaut/"
        target="blank"
        className="social-link"
      >
        <BsLinkedin />
      </a>
    </div>
  );
}

export default SocialLinks;
