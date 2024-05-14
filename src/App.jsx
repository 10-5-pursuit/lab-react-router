import React from "react";
import { useState } from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
import NewPet from "./components/pets/NewPet.jsx";

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
  const [pets, setPets] = useState(petData);
  const [animals, setAnimals] = useState("All")

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home employees={employees} owners={owners} pets={pets} />}/>
          <Route path="/staff" element={<StaffList employees={employees} />}/>
          <Route path={`/pets/${animals}`} element={<PetsList pets={pets} animals={animals} setAnimals={setAnimals}/>}/>
          <Route path="/pets/newpet" element={<NewPet pets={pets} setPets={setPets}/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
