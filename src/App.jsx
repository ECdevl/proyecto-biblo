import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav";
import DashboardContainer from "./pages/dashboardContainer";
import Login from "./pages/login";
import Home from "./pages/Home";
import BookList from "./bookList";

function App() {
  const [books, setBooks] = useState([]); // Estado compartido para los libros

  const handleAddBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]); // Asegurarse de usar el estado previo
  };

  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home books={books} />} // Pasar estado de libros a Home
        />
        <Route
          path="/dashboard"
          element={<DashboardContainer books={books} onAddBook={handleAddBook} />} // Pasar estado y función
        />
        <Route path="/login" element={<Login />}/>
        <Route path="/catalogo" element={<BookList books={books} quantity={"all"} genero={"TERROR"}/>}/>
      </Routes>
    </Router>
  );
}

export default App;