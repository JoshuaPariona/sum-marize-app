import React from "react";
import "./Login.css";
import Home from "../Home/Home";
import  { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-logo">
          <img
            src="https://sum.unmsm.edu.pe/alumnoWebSum/image/logo_sum_header.png"
            alt="Logo"
          />
        </div>
        <div className="login-content">
          <h1 className="login-title">Intranet Docente</h1>
          <form className="login-form">
            <div className="form-input">
              <label htmlFor="email">Usuario:</label>
              <input type="email" placeholder="juan@unmsm.edu.pe" />
            </div>
            <div className="form-input">
              <label htmlFor="password">Contraseña:</label>
              <input type="password" placeholder="*********" />
            </div>
            <Link to={'./Home'}><button type="submit" className="button-submit">Iniciar sesión</button></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
