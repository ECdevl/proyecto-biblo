import React from 'react';
import "./BookCard.css"
function BookCard({ book }) {
  return (
    <div id="main">
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
      <h2 id="nombre">{book.name}</h2>
      <p id="disponibilidad"><strong>{book.availability}</strong></p>
      <p id="autor"><strong>Autor:</strong> {book.author}</p>
      <p id="codigo"><strong>Código de barras:</strong> {book.barcode}</p>

  
    </div>
  );
}

export default BookCard;