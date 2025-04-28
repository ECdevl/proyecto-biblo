import React from 'react';
import "./BookCard.css"
function BookCard({ book }) {

  const toggleSize = (e) => {
    e.currentTarget.classList.toggle("expand");
    
  };

  return (
    <div id="main" onClick={toggleSize}>
      <h5>Haz click para ver mas</h5>
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
      <h3 id="genre">Genero: {book.genre}</h3>
      {book.availability === "disponible" ? (
        <p id="disponibilidad" className="Disponible"><strong>{book.availability}</strong></p>
      ) : (
        <p id="disponibilidad" className="no disponible"><strong>{book.availability}</strong></p>
      )}
      <p id="autor"><strong>Autor:</strong> {book.author}</p>
      <p id="codigo">{book.barcode}</p>

  
    </div>
  );
}

export default BookCard;