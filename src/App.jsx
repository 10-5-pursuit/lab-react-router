import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import Nav from "./components/common/Nav.jsx";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

// Import data
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);

  return (
  <Router>
    <div className="wrapper">
      <Nav />
      <Routes>
        <Route path="/" element={<Home employees={employees} owners={owners} pets={pets} />} />
        <Route path="/staff" element={<StaffList employees={employees} />} />
        <Route path="/pets" element={<PetsList pets={pets} />} />
        <Route path="/pets/cats" element={<PetsList pets={pets.filter((pet) => pet.kind === "Cat")} />} />
        <Route path="/pets/dogs" element={<PetsList pets={pets.filter((pet) => pet.kind === "Dog")} />} />
        <Route path="*" element={<Home employees={employees} owners={owners} pets={pets} />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  
  );
}

export default App;