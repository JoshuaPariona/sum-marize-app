import React, { useContext, useEffect, useState } from "react";
import { data } from "../../../data/Student";
import Modal from "../../../components/Modales/Modal";
import { StudentDataContext } from "../../../context/StudentData";
import ModalAudio from "../../../components/Modales/ModalAudio";

const ListStudents = () => {
  const [audioURL, setAudioURL] = useState("");
  const [audioLoading, setAudioLoading] = useState(false);
  const { studentData } = useContext(StudentDataContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAudioModalOpen, setIsAudioModalOpen] = useState(false);

  useEffect(() => {}, [studentData]);

  const fillStudentData = (code, tag) => {
    if (studentData) {
      const student = studentData.find(
        (student) => student["Código Alumno"] === Number(code)
      );
      if (student) return student[tag];
      else {
        return "SN";
      }
    } else {
      return "SN";
    }
  };

  const getAudioURL = async () => {
    setAudioLoading(true)
    try {
      const response = await fetch("http://localhost:8000/api/v1/tts/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Indicar que el cuerpo es JSON
        },
        body: JSON.stringify({
          tag: "Asignatura	20754 - Programación Concurrente y Paralela",
          data: data.map((student) => {
            const np = fillStudentData(student.code, "NP");
            const ev = fillStudentData(student.code, "EV");
            const nf = fillStudentData(student.code, "NF");
            return {
              codigo: student.code,
              name: student.names,
              "f-surname": student.paternal,
              "m-surname": student.maternal,
              ep: np,
              ev: ev,
              ef: nf,
              pf:
                typeof np === "string" ||
                typeof ev === "string" ||
                typeof nf === "string"
                  ? "Sin Nota"
                  : Math.round(np * 0.3 + ev * 0.4 + nf * 0.3),
            };
          }),
        }),
      });
      const audioBlob = await response.blob();
      setAudioURL(URL.createObjectURL(audioBlob));
      setAudioLoading(false)
    } catch (error) {
      console.log("error");
      console.log(error);
      setAudioLoading(false)
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openAudioModal = async () => {
    setIsAudioModalOpen(true);
    getAudioURL();
  };
  const closeAudioModal = () => setIsAudioModalOpen(false);

  const renderTable = () => (
    <table aria-hidden="true" className="student-table">
      <thead>
        <tr className="row-header row-gray">
          <td colSpan={9}>Alumnos matriculados</td>
        </tr>
        <tr>
          <td className="cell-weight">Id</td>
          <td className="cell-weight">Código</td>
          <td className="cell-weight">Apellido Paterno</td>
          <td className="cell-weight">Apellido Materno</td>
          <td className="cell-weight">Nombres</td>
          <td className="cell-weight">EP</td>
          <td className="cell-weight">EC</td>
          <td className="cell-weight">EF</td>
          <td className="cell-weight">PF</td>
        </tr>
      </thead>
      <tbody>
        {data.map((student) => {
          const np = fillStudentData(student.code, "NP");
          const ev = fillStudentData(student.code, "EV");
          const nf = fillStudentData(student.code, "NF");
          return (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.code}</td>
              <td>{student.paternal}</td>
              <td>{student.maternal}</td>
              <td>{student.names}</td>
              <td>{np}</td>
              <td>{ev}</td>
              <td>{nf}</td>
              <td>
                {typeof np === "string" ||
                typeof ev === "string" ||
                typeof nf === "string"
                  ? "SN"
                  : Math.round(np * 0.3 + ev * 0.4 + nf * 0.3)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return (
    <div className="student-container">
      {renderTable()}
      <div className="view-container">
        <button onClick={openModal} className="view-button">
          Vista Preliminar
        </button>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <div className="important-container">
          <h2 className="important-title">Importante</h2>
          <p className="important-paragraph">
            PORFAVOR VERIFIQUE BIEN LAS CALIFICACIONES ANTES DE GRABAR PARA
            CORREGIR HAGA CLICK EN EL BOTON CORREGIR UNA VEZ GRABADA LA
            CALIFICACION NO PODRA SER CORREGIDA.
          </p>
        </div>
        {renderTable()}
        <div className="modal-buttons">
          <button
            onClick={openAudioModal}
            className="modal-button button-green"
          >
            Escuchar
          </button>
          <button className="modal-button button-red">Corregir</button>
          <button className="modal-button button-sky">Grabar</button>
        </div>
      </Modal>
      <ModalAudio isOpen={isAudioModalOpen} closeModal={closeAudioModal}>
        {audioLoading ? (
          <h2>Cargando</h2>
        ) : (
          <div className="audio-container">
            <h2>Audio</h2>
            <audio controls>
              <source src={audioURL} type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </ModalAudio>
    </div>
  );
};

export default ListStudents;
