import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav as BootstrapNav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <BootstrapNav className="me-auto">
            <BootstrapNav.Link as={Link} to="/">Home</BootstrapNav.Link>
            <BootstrapNav.Link as={Link} to="/dashboard">Dashboard</BootstrapNav.Link>
            <BootstrapNav.Link as={Link} to="/login">Login</BootstrapNav.Link>
          </BootstrapNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;