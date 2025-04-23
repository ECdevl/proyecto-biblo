import React, { useState } from 'react';
import DashboardUser from './dashboardUser';
import BookCard from "../BookCard";

function DashboardContainer() {
  const [bookData, setBookData] = useState(null);

  const handleBookData = (data) => {
    setBookData(data); // Guardar los datos del libro en el estado
  };

  return (
    <div>
      <h1>Agregar un libro</h1>
      <DashboardUser onSubmitBookData={handleBookData} />
      {bookData && <BookCard book={bookData} />} {/* Mostrar la tarjeta si hay datos */}
      <h2>Libros Agregados</h2>
      <h3>Nose como se hace eso</h3>
    </div>
  );
}

export default DashboardContainer;