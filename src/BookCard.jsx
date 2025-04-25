import React from 'react';
import "./BookCard.css"
function BookCard({ book }) {
  return (
    <div id="main">
      <h2 id="nombre">{book.name}</h2>
      <p id="disponibilidad"><strong>{book.availability}</strong></p>
      <p id="autor"><strong>Autor:</strong> {book.author}</p>
      <p id="codigo"><strong>Código de barras:</strong> {book.barcode}</p>
      {book.coverImage && (

      <div id="portadaContainer">
          <img
            src={URL.createObjectURL(book.coverImage)}
            alt="Portada"
            id="portada"
          />
          <img
            src={URL.createObjectURL(book.backImage)}
            alt="Portada"
            id="trasera"
            />
      </div>
      )}
  
    </div>
  );
}

export default BookCard;