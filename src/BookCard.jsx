import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BookCard({ book }) {
  return (
    <Card className="shadow-sm mb-4">
      <Card.Body>
        <Card.Title as="h2" className="mb-3">{book.name}</Card.Title>
        
        <div className="mb-3">
          <Badge 
            bg={book.availability === "Disponible" ? "success" : "danger"}
            className="fs-6 py-2 px-3"
          >
            {book.availability}
          </Badge>
        </div>
        
        <Card.Text className="mb-2">
          <strong>Autor:</strong> {book.author}
        </Card.Text>
        
        <Card.Text className="mb-3">
          <strong>Código de barras:</strong> {book.barcode}
        </Card.Text>
        
        {book.coverImage && (
          <Container fluid className="p-0 mt-3">
            <Row>
              <Col xs={6} className="pe-1">
                <Card.Img
                  src={URL.createObjectURL(book.coverImage)}
                  alt="Portada"
                  className="img-fluid rounded"
                />
              </Col>
              <Col xs={6} className="ps-1">
                <Card.Img
                  src={URL.createObjectURL(book.backImage)}
                  alt="Trasera"
                  className="img-fluid rounded"
                />
              </Col>
            </Row>
          </Container>
        )}
      </Card.Body>
    </Card>
  );
}

export default BookCard;