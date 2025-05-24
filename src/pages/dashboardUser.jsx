import React, { useState } from 'react';
import BookCard from "../BookCard";
import BookList from "../bookList.jsx"
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function DashboardUser({books}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [appliedSearchTerm, setAppliedSearchTerm] = useState('');

  // Filtra los libros por nombre usando el término aplicado
  const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(appliedSearchTerm.toLowerCase())
  );

  const handleSearch = () => {
    setAppliedSearchTerm(searchTerm);
  };

  return (
    <div id="userDashboard" style={{width: "100%", height: "100vh", overflowY: "scroll"}}>
        <input
          type="text"
          placeholder="Buscar por nombre"
          style={{width: "100%", height: "50px", marginBottom: "20px"}}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <Button
          style={{width: "100%", height: "50px", marginBottom: "20px"}}
          onClick={handleSearch}
        >
          Buscar
        </Button>

        {appliedSearchTerm ? (
          <>
            <h2 style={{textAlign: "center"}}>Resultados de la búsqueda</h2>
            <BookList books={filteredBooks} quantity="all" genero="all" admin={false}/>
          </>
        ) : (
          <>
            <h2 style={{textAlign: "center"}}>Agregados Recientemente</h2>
            <BookList books={books} quantity={3} genero="all" admin={false}/>
            <h2 style={{textAlign: "center"}}>Todos los libros</h2>
            <BookList books={books} quantity="all" genero="all" admin={false}/>
          </>
        )}
    </div>
  );
}

export default DashboardUser;