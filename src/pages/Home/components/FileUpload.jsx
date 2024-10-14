import React, { useContext, useState } from "react";
import "../Home.css"; // Asegúrate de crear este archivo CSS
import { StudentDataContext } from "../../../context/StudentData";

const FileUpload = () => {
  const {setStudentData} = useContext(StudentDataContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const  handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadClick = async () => {
    setIsModalOpen(true);
    setProgress(0);
    if (selectedFile) {
      try {
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              return 100;
            }
            return prev + 20;
          });
        }, 600);
        const formData = new FormData();
        formData.append('file', selectedFile);
        const response = await fetch("http://localhost:8000/api/v1/notes/process_notes/", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        setStudentData(data.notes.codigo_np_ev_nf)
        setIsModalOpen(false);
      } catch (error) {
        console.log("error");
        console.log(error);
        setIsModalOpen(false);
        setSelectedFile(null);
      }
    }
    else {
      setSelectedFile(null);
    }
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
      <button
        onClick={handleUploadClick}
        className="upload-button"
        disabled={!selectedFile}
      >
        Autocompletar
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <button onClick={closeModal} className="close-button">
            &times;
          </button>
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
};

export default FileUpload;
