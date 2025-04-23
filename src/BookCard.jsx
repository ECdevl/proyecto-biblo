import React from 'react';

function BookCard({ book }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginTop: '16px', borderRadius: '8px' }}>
      <h2>{book.name}</h2>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Código de barras:</strong> {book.barcode}</p>
      {book.coverImage && (
        <div>
          <strong>Imagen de portada:</strong>
          <img
            src={URL.createObjectURL(book.coverImage)}
            alt="Portada"
            style={{ width: '100px', height: '150px', objectFit: 'cover', marginTop: '8px' }}
          />
        </div>
      )}
      {book.backImage && (
        <div>
          <strong>Imagen trasera:</strong>
          <img
            src={URL.createObjectURL(book.backImage)}
            alt="Trasera"
            style={{ width: '100px', height: '150px', objectFit: 'cover', marginTop: '8px' }}
          />
        </div>
      )}
    </div>
  );
}

export default BookCard;