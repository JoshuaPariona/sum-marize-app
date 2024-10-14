import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null; // Si isOpen es false, no renderiza nada y la modal no se muestra.

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="close-container">
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
