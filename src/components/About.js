import React from 'react';
import photo2 from '../assets/images/photo2.jpg';
import '../assets/styles/About.css'; 

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-content">
        <img src={photo2} alt="Khoirul Ansori" className="about-photo" />
        <div className="about-description">
          <p>"I am an active student in the Information Systems Study Program at Universitas Negeri Surabaya, with a strong passion for programming and fullstack web development, particularly in backend technologies. My experience includes working on various web development projects, where I have honed my skills in building efficient, scalable, and well-structured applications.
          Beyond technical expertise, I have extensive leadership experience and actively contribute to various organizations, including pesantren organizations. I am committed to continuous learning, self-improvement, and effective time management to adapt to the ever-evolving tech industry.""</p>
        </div>
      </div>
    </div>
  );
};

export default About;
