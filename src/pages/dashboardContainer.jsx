import React from 'react';
import DashboardUser from './dashboardUser';
import BookCard from "../BookCard";
import "./DashboardContainer.css"
function DashboardContainer({ books, onAddBook }) {
  
  const handleBookData = (data) => {
    onAddBook(data); // Llamar a la función pasada desde App.jsx
  };

  return (
    <div id="mains">
      <h1>Agregar un libro</h1>
      <DashboardUser onSubmitBookData={handleBookData} />
      <h2>Libros Agregados</h2>
      <div>
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
}

export default DashboardContainer;