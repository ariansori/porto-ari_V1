import React, { useState } from "react";

const Card = ({ title, description, link, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card">
      <h3>{title}</h3>

      {/* Gambar bisa diklik untuk membuka modal */}
      {image && (
        <img
          src={image}
          alt={title}
          className="certificate-image"
          onClick={() => setIsOpen(true)}
        />
      )}

      <p>{description}</p>

      {/* Link untuk sertifikat */}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Details
        </a>
      )}

      {/* Modal Preview Gambar */}
      {isOpen && (
        <div className="modal" onClick={() => setIsOpen(false)}>
          <div className="modal-content">
            <img src={image} alt={title} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
