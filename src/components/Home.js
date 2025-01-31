import React from 'react';
import photo from '../assets/images/photo.png';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home">
      <div className="text-container">
        <h1>Hello There</h1>
        <h2>I'm KHOIRUL ANSORI</h2>
        <h1>Junior Web Developer</h1>
        <p>Fullstack Web Development Enthusiast | Always Learning & Growing</p>
        <button>Let's connect!</button>
     
        {/* Social Media Icons Section */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/khoirulansori" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://www.instagram.com/kh_ansorii/profilecard/?igsh=MWxzZmxtN3JmdzU1Yg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://github.com/ariansori" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
        </div>
      </div>
      <div className="image-container">
      <img src={photo} alt="KHOIRUL ANSORI" />
      </div>
    </div>
  );
};

export default Home;