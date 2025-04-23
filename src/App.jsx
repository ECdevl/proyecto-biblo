import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav";
import DashboardContainer from "./pages/dashboardContainer";
import Login from "./pages/login"; 

function App() {
  
  return (
    
    <Router>
      <Nav/>
      <Routes>
        <Route path="/dashboard" element={<DashboardContainer />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;