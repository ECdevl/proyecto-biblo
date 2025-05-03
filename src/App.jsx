import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav";
import Login from "./pages/login";
import BookList from "./bookList";
import DashboardContainer from "./pages/dashboardContainer";
function App() {
  const [books, setBooks] = useState([]); // Estado compartido para los libros

  const handleAddBook = (book) => {
    setBooks([...books, book]); // Agregar un libro a la lista
  };

  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Bienvenido a la Biblioteca
              </h1>
              
              <BookList books={books} /> 
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={<DashboardContainer books={books} onAddBook={handleAddBook} />} // Pasar estado y función
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;