import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

/*
  Components
*/

import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);

  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route path="/" element={<Home employees={employees} owners={owners} pets={pets} />} />
          <Route path="/staff" element={<StaffList employees={employees} />} />
          <Route path="/pets" element={<PetsList pets={pets} />} />
          <Route path="/pets/cats" element={<PetsList pets={cats} />} />
          <Route path="/pets/dogs" element={<PetsList pets={dogs} />} />
        
          
        </Routes>  
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
