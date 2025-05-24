import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import BookMore from './bookMore.jsx';

function BookCard({ book }) {
  const [showMore, setShowMore] = useState(false);

  function handleShowMore() {
    setShowMore(true);

  }

  function handleCloseMore() {
    setShowMore(false);


  }

  return (
    
      <Card id="main" style={{ width: '18rem', textAlign: 'center' }}>
        <Card.Header id="header" >{book.name}</Card.Header>

          <Card.Img
            src={URL.createObjectURL(book.coverImage)}
            alt="Portada"
            id="portada"
            variant="top"
            style={{ width: '250px', height: '300px',objectFit: 'fill', margin: 'auto' }}
            />


        <Card.Body >
          <Card.Text id="genre" >Género: {book.genre}</Card.Text>
          {book.availability === "disponible" ? (
            <Card.Text id="disponibilidad"><strong>{book.availability}</strong></Card.Text>
          ) : (
            <Card.Text id="disponibilidad"><strong>{book.availability}</strong></Card.Text>
          )}
          <Card.Text id="autor"><strong>Autor:</strong> {book.author}</Card.Text>
          <Card.Text id="codigo">{book.barcode}</Card.Text>
          <Button id="btn" variant="primary" onClick={handleShowMore} >Mostrar Mas</Button>


        </Card.Body>
        {showMore && <BookMore book={book} onClose={handleCloseMore} />}
        
      </Card>
      


      

  );
}

export default BookCard;