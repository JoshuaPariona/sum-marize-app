import React from "react";
import "../Home.css";
const DataCourse = () => {
  const faculty = {
    semester: "2024 - II",
    plan: "Plan de estudios 2018",
    name: "7 - Ingieneria de Sistemas e Informatica",
    course: "20754 - Programación Concurrente y Paralela",
    career: "Ingieneria de Software",
    section: "2/ No registrada / U",
    code: "20754",
  };

  return (
    <div className="course-container">
      <table aria-hidden="true" className="course-table">
        <tr className="row-header row-sky">
          <td colSpan={4}>Asignatura</td>
        </tr>
        <tr>
          <td className="cell-weight">Semestre</td>
          <td>{faculty.semester}</td>
          <td className="cell-weight">Plan</td>
          <td>{faculty.plan}</td>
        </tr>
        <tr>
          <td className="cell-weight">Facultad</td>
          <td>{faculty.name}</td>
          <td className="cell-weight">Asignatura</td>
          <td>{faculty.course}</td>
        </tr>
        <tr>
          <td className="cell-weight">Escuela</td>
          <td>{faculty.career}</td>
          <td className="cell-weight">Seccion/Aula/Turnos</td>
          <td>{faculty.section}</td>
        </tr>
        <tr>
          <td className="cell-weight">Especialidad</td>
          <td>{faculty.career}</td>
          <td className="cell-weight">Acta</td>
          <td>{faculty.code}</td>
        </tr>
      </table>
    </div>
  );
};

export default DataCourse;
