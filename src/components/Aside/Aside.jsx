import React, { useEffect, useRef, useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { FaUser, FaSchool,  FaCalendarDay, FaPowerOff } from "react-icons/fa";
import "./Aside.css";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef(null); // Almacena valores mutables que no provocan una nueva renderizacion y manipula elementos DOM

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      if (contentRef.current) { //current propiedad de useRef, permite acceder a ese elemento
        contentRef.current.classList.add("content-shift");
      }
    } else {
      if (contentRef.current) {
        contentRef.current.classList.remove("content-shift");
      }
    }
  }, [isOpen]);

  return (
    <div className="container">
      <div className="hamburger-menu">
        <button className="hamburger-button" onClick={toggleMenu}>☰</button>
        <aside className={`sidebar-layout ${isOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <img
              src="https://sum.unmsm.edu.pe/alumnoWebSum/image/logo_sum_header.png"
              alt="Logo"
            />
          </div>
          <div className="sidebar-content">
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item"><GoHomeFill  className="icon-aside" />Inicio</li>
                <li className="nav-item"><FaUser  className="icon-aside"/>Mi información</li>
                <li className="nav-item sub-item">
                <FaSchool className="icon-aside" />Docente
                  {/* <ul className="nav-item__teacher">
                          <li className="nav-item">Lista de asignaturas</li>
                          <li className="nav-item">Ingreso de calificaciones</li>
                      </ul> */}
                </li>
                <li className="nav-item"><FaCalendarDay  className="icon-aside"/>Actividad Académica</li>
                <li className="nav-item nav-item__close"><FaPowerOff className="icon-aside"/>Salir</li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
      <div ref={contentRef} className="main-content">
      </div>
    </div>
  );
};

export default Aside;
