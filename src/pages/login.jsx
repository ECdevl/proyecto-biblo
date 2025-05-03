import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Image, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  // Estado para manejar los valores del formulario
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [showError, setShowError] = useState(false);

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Aquí iría la lógica de autenticación
      // Por ahora, mostraremos un error de ejemplo
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
    
    setValidated(true);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} xl={5}>
          <Card className="shadow border-0">
            <Card.Body className="p-5">
              {/* Logo */}
              <div className="text-center mb-4">
                <Image 
                  src="/logo-biblioteca.png" 
                  alt="Logo de la Biblioteca" 
                  width={150} 
                  className="img-fluid"
                />
              </div>
              
              <h2 className="text-center mb-4 fw-bold">Iniciar Sesión</h2>
              
              {/* Alerta de error */}
              {showError && (
                <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                  Usuario o contraseña incorrectos. Intente nuevamente.
                </Alert>
              )}
              
              {/* Formulario */}
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingrese su usuario.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingrese su contraseña.
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" size="lg">
                    Ingresar
                  </Button>
                </div>
              </Form>
              
              {/* Enlaces adicionales */}
              <div className="text-center mt-3">
                <a href="#!" className="text-decoration-none">¿Olvidó su contraseña?</a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
