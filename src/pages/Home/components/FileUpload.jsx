import React, { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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
        {selectedFile ? selectedFile.name : "Subir documento de notas"} {/* Muestra el nombre del archivo seleccionado o el texto por defecto */}
      </label>
    </div>
  );
}

export default FileUpload;
