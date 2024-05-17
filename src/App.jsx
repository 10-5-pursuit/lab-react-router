// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { useState } from "react";

// /*
//   Components
// */
// import Nav from "./components/common/Nav";
// import Footer from "./components/common/Footer";
// import Home from "./components/home/Home";
// import StaffList from "./components/staff/StaffList";
// import PetsList from "./components/pets/PetsList";
// import NotFoundPage from "./components/common/NotFoundPage.jsx";

// /*
//   Data
//   ---------------
//   Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
// */
// import { employeeData } from "./data/employees.js";
// import { ownerData } from "./data/owners";
// import { petData } from "./data/pets";

// function App() {
//   const [employees] = useState(employeeData);
//   const [owners] = useState(ownerData);
//   const [pets] = useState(petData);

//   return (
//     <Router>
//       <div className="wrapper">
//         <Nav />
//         <Routes>
//           <Route
//             path="/"
//             element={<Home employees={employees} owners={owners} pets={pets} />}
//           />
//           <Route path="/staff" element={<StaffList employees={employees} />} />
//           <Route path="/pets" element={<Navigate to="/pets/cats" />} />
//           <Route
//             path="/pets/cats"
//             element={
//               <PetsList pets={pets.filter((pet) => pet.kind === "cat")} />
//             }
//           />
//           <Route
//             path="/pets/dogs"
//             element={
//               <PetsList pets={pets.filter((pet) => pet.kind === "dog")} />
//             }
//           />
//           <Route path="*" element={<NotFoundPage />} />{" "}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
import NotFoundPage from "./components/common/NotFoundPage.jsx";
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
          <Route
            path="/"
            element={<Home employees={employees} owners={owners} pets={pets} />}
          />
          <Route path="/staff" element={<StaffList employees={employees} />} />
          <Route path="/pets" element={<Navigate to="/pets/cats" />} />
          <Route path="/pets/*" element={<PetsList pets={pets} />} />
          {/* <Navigate to="/pets/cats" /> */}
          {/* <Route
            path="/pets/cats/*"
            element={
              <PetsList pets={pets.filter((pet) => pet.kind === "Cat")} />
            }
          /> */}
          {/* <Route
            path="/pets/dogs/*"
            element={
              <PetsList pets={pets.filter((pet) => pet.kind === "Dog")} />
            }
          /> */}
          {/* <Route path="*" element={<NotFoundPage />} />{" "} */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
