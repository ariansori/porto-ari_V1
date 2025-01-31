import React from 'react';
import Card from './Card';
import cert1 from '../assets/images/cert1.jpg';
import cert2 from '../assets/images/cert2.jpg';
import cert3 from '../assets/images/cert3.jpg';
import cert4 from '../assets/images/cert4.jpg';
import cert5 from '../assets/images/cert5.jpg';
import cert6 from '../assets/images/cert6.jpg';
import cert7 from '../assets/images/cert7.jpg';
import Bootcamp from '../assets/images/bootcamp.png';
import Magistra from '../assets/images/magistra.png';

const Certificates = () => {
  return (
    <div className="certificates">
      <div className="card-container">
        <Card
          title="AI Technologies"
          image={cert1}
        />
        <Card
          title="Database Management"
          image={cert2}
        />
        <Card
          title="Golang"
          image={cert3}
        />
        <Card
          title="Soft Skills"
          image={cert4}
        />
        <Card
          title="RPL"
          image={cert5}
        />
        <Card
          title="Basic Web"
          image={cert6}
        />
        <Card
          title="Web React"
          image={cert7}
        />
        <Card
          title="Bootcamp Web Dev"
          image={Bootcamp}
        />
        <Card
          title="Magistra Ms.Office"
          image={Magistra}
        />
      </div>
    </div>
  );
};

export default Certificates;
