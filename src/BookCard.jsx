import React from 'react';
import "./BookCard.css"
function BookCard({ book }) {



  return (
    <div id="main" class="card">
      <div id="header" class="card-header">{book.name}</div>


        <div id="portadaContainer">
            <img
              src={URL.createObjectURL(book.coverImage)}
              alt="Portada"
              id="portada"
              class="card-img-top"
            />
            <img
              src={URL.createObjectURL(book.backImage)}
              alt="Portada"
              id="trasera"
              class="card-img-top"
              />
        </div>

        <div class="card-body">
      
      <h3 id="genre" class="card-text">Genero: {book.genre}</h3>
      {book.availability === "disponible" ? (
        <p id="disponibilidad" className="Disponible" class="card-text"><strong>{book.availability}</strong></p>
      ) : (
        <p id="disponibilidad" className="no disponible" class="card-text"><strong>{book.availability}</strong></p>
      )}
      <p id="autor" class="card-text"><strong>Autor:</strong> {book.author}</p>
      <p id="codigo" class="card-text">{book.barcode}</p>

        </div>
    </div>
  );
}

export default BookCard;