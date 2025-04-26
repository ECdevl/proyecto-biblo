import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav";
import DashboardContainer from "./pages/dashboardContainer";
import Login from "./pages/login";
import BookList from "./bookList";
import Home from "./pages/Home"

function App() {
  const [books, setBooks] = useState([]); // Estado compartido para los libros

  const handleAddBook = (book) => {
    setBooks([...books, book]); // Agregar un libro a la lista
  };

  return (
    <Router>
      <Nav/>
      <Routes>
        <Route
          path="/"
          element={<Home books={books} onAddBook={handleAddBook}/>}
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