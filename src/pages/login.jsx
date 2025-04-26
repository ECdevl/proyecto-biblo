//Crear un inicio de sesion en el cual tenga una imagen del logo de la bibloteca del lado izquierdo de la pantalla y del lado derecho de la pantalla los input

import React from 'react'
import "./login.css"; // Importamos el archivo CSS

const login = () => {
  return (
    <div id="container">
      {/* Sección del Logo */}
      <div id="logo-section">
        <img
          src="logo-biblioteca.png"
          alt="Logo de la Biblioteca"
          id="logo"
        />
      </div>

      {/* Sección del Formulario */}
      <div id="form-section">
        <h2 id="title">Iniciar Sesión</h2>
        <form id="form">
          <input
            type="text"
            placeholder="Usuario"
            required
            id="input"
          />
          <input
            type="password"
            placeholder="Contraseña"
            required
            id="input"
          />
          <button type="submit" id="button">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default login;
