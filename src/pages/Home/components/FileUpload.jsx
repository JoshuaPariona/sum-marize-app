import React, { useState } from 'react';
import '../Home.css'; // Asegúrate de crear este archivo CSS

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadClick = () => {
    setIsModalOpen(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsModalOpen(false); 
          return 100;
        }
        return prev + 20; 
      });
    }, 600);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setProgress(0);
    setSelectedFile(null); 
  };

  return (
    <div className="upload-container">
      <input 
        type="file" 
        onChange={handleFileChange} 
        id="file-upload"
        className="button-upload"
      />
      <label htmlFor="file-upload" className="label-upload">
        {selectedFile ? selectedFile.name : "Subir documento de notas"}
      </label>
      <button onClick={handleUploadClick} className="upload-button" disabled={!selectedFile}>
        Subir
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <button onClick={closeModal} className="close-button">&times;</button>
          <div className="modal">
            <h2>Cargando documento...</h2>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }} 
              ></div>
            </div>
            <p>{progress}%</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
