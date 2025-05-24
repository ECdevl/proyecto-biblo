import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function DashboardUser({ onSubmitBookData }) {
  const [formData, setFormData] = useState({
    coverImage: null,
    backImage: null,
    name: '',
    author: '',
    barcode: '',
    availability: 'Disponible'
  });

  const [previewCover, setPreviewCover] = useState(null);
  const [previewBack, setPreviewBack] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
      
      // Crear URL para previsualización
      if (name === 'coverImage') {
        setPreviewCover(URL.createObjectURL(files[0]));
      } else if (name === 'backImage') {
        setPreviewBack(URL.createObjectURL(files[0]));
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitBookData(formData);
  };

  return (
    <Container className="py-4">
      <Card className="shadow-sm">
        <Card.Header className="bg-primary text-white">
          <h4 className="mb-0">Registrar Nuevo Libro</h4>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Row className="mb-4">
                  <Col sm={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Imagen de portada</Form.Label>
                      <Form.Control 
                        type="file" 
                        name="coverImage" 
                        accept="image/*" 
                        onChange={handleChange} 
                        required 
                      />
                      {previewCover && (
                        <div className="mt-2 text-center">
                          <Image 
                            src={previewCover} 
                            alt="Portada" 
                            style={{ width: '120px', height: '180px', objectFit: 'cover' }} 
                            thumbnail
                          />
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Imagen trasera</Form.Label>
                      <Form.Control 
                        type="file" 
                        name="backImage" 
                        accept="image/*" 
                        onChange={handleChange} 
                        required 
                      />
                      {previewBack && (
                        <div className="mt-2 text-center">
                          <Image 
                            src={previewBack} 
                            alt="Contraportada" 
                            style={{ width: '120px', height: '180px', objectFit: 'cover' }} 
                            thumbnail
                          />
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre del libro</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="Título del libro"
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Autor</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="author" 
                    value={formData.author} 
                    onChange={handleChange} 
                    required 
                    placeholder="Autor del libro"
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Código de barras</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="barcode" 
                    value={formData.barcode} 
                    onChange={handleChange} 
                    placeholder="Código de barras (opcional)"
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Disponibilidad</Form.Label>
                  <Form.Select 
                    name="availability" 
                    value={formData.availability}
                    onChange={handleChange}
                  >
                    <option value="Disponible">Disponible</option>
                    <option value="No Disponible">No disponible</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <div className="d-grid gap-2 col-6 mx-auto mt-4">
              <Button variant="primary" type="submit" size="lg">
                Registrar Libro
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DashboardUser;