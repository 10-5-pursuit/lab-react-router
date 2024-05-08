import React from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  NavLink,
} from "react-router-dom";

/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

// Layouts
import DefaultLayout from "./layouts/DefaultLayout.jsx";

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


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<DefaultLayout/>}>
        <Route index element={<Home employees={employees} owners={owners} pets={pets} />}/>
        <Route path="/staff" element={<StaffList employees={employees} />}/>
        <Route path="/pets/:pet" element={<PetsList pets={pets} />}/>
      </Route>
    )
  )

  return (
    <div className="wrapper">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
