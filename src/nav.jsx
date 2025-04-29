import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-blue">
      <div>Logo</div>
      <ul class="navbar-nav">
        <li class="nav-item"><Link to="/">Home</Link></li>
        <li class="nav-item"><Link to="/dashboard">Dashboard</Link></li>
        <li class="nav-item"><Link to="/login">Login</Link></li>
        <li class="nav-item"><Link to="/catalogo">Libros</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;