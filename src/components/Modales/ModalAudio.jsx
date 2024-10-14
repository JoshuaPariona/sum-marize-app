import React from 'react'
import './ModalAudio.css'

const ModalAudio = ({ isOpen, closeModal, children }) => {
    if (!isOpen) return null; // Si isOpen es false, no renderiza nada y la modal no se muestra.

    return (
      <div className="audio-overlay">
        <div className="audio-content">
          <div className="close-container">
            <button className="close-audio" onClick={closeModal}>
              &times;
            </button>
          </div>
          {children}
        </div>
      </div>
    );
}

export default ModalAudio
