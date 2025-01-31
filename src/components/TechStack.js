import React from 'react';
import nodeIcon from '../assets/icons/nodejs.svg';
import reactIcon from '../assets/icons/reactjs.svg';
import htmlIcon from '../assets/icons/html.svg';
import cssIcon from '../assets/icons/css.svg';
import jsIcon from '../assets/icons/javascript.svg';
import goIcon from '../assets/icons/golang.svg';
import PostgresqllIcon from '../assets/icons/postgresql.svg';
import phpIcon from '../assets/icons/php.svg';
import firebaseIcon from '../assets/icons/firebase.svg';
import xamppIcon from '../assets/icons/xampp.svg';
import bootstrapIcon from '../assets/icons/bootstrap.svg';

const TechStack = () => {
  const stacks = [
    { title: "HTML", icon: htmlIcon },
    { title: "CSS", icon: cssIcon },
    { title: "JavaScript", icon: jsIcon },
    { title: "React", icon: reactIcon },
    { title: "Node.js", icon: nodeIcon },
    { title: "Go", icon: goIcon },
    { title: "PostgreSQL", icon: PostgresqllIcon },
    { title: "PHP", icon: phpIcon },
    { title: "XAMPP", icon: xamppIcon },
    { title: "Firebase", icon: firebaseIcon },
    { title: "Bootstrap", icon: bootstrapIcon },
  ];

  return (
    <div className="tech-stack">
      <div className="card-container-icon">
        {stacks.map((stack, index) => (
          <div className="card-icon" key={index}>
            <img src={stack.icon} alt={stack.title} width="100" height="100" />
            <h3>{stack.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
