import React from "react";
import '../assets/styles/Resume.css'; 

const Resume = () => {
  const cvLink =
    "https://drive.google.com/file/d/1bzMxj-kp8I4u7I4FGhF0ox58HlXgUiYW/view?usp=sharing";

  return (
    <div className="resume">
      {/* Tombol Download */}
      <a
        href={cvLink}
        className="download-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume 📄
      </a>
      {/* Preview CV */}
      <div className="cv-preview">
        <iframe
          src={`https://drive.google.com/file/d/1bzMxj-kp8I4u7I4FGhF0ox58HlXgUiYW/preview`}
          title="CV Preview"
          width="100%"
          height="500px"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
