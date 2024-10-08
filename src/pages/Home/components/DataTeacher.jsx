import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import "../Home.css";

const DataTeacher = () => {
  const dataTeacher = {
    name: "Doe Perez, John ",
    code: "123456",
  };

  return (
    <div className="note-container">
      <span className="note-route">INICIO <IoIosArrowBack /> DOCENTE <IoIosArrowBack /> INGRESO DE CALIFICACIONES <IoIosArrowBack /> Notas por Alumno</span>
      <h1 className="note-title">Notas por Alumnos</h1>
      <div className="note-content">
        <div className="note-subtitle">
          <img src="./src/assets/iconTeacher.png" alt="" />
          <h2>Notas por alumnos</h2>
        </div>
        <div className="teacher-content">
          <div className="teacher-data teacher-code">
            <h3>Código:</h3>
            <p>{dataTeacher.code}</p>
          </div>
          <div className="teacher-data teacher-name">
            <h3>Apellidos y nombres</h3>
            <p>{dataTeacher.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTeacher;
