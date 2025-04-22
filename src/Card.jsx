import React from 'react';
import "./card.css";
function Card({ data }) {
  return (
    <div className="card">
      <h2>{data.nombre}</h2>
      <p>Autor: {data.autor}</p>
      <p>Código de barras: {data.codigo}</p>
      {data.portada && <img id="portada" src={URL.createObjectURL(data.portada)} alt="Portada" />}
      {data.trasera && <img id="trasero" src={URL.createObjectURL(data.trasera)} alt="Trasera" />}
    </div>
  );
}

export default Card;