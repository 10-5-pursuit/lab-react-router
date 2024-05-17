// import React from "react";
// import "./PetsListNav.css";

// export const PetsListNav = ({ cats, dogs }) => {
//   return (
//     <nav className="pets-nav">
//       <ul>
//         <li>
//           <a href="/pets/cats">See All Cats ({cats.length})</a>
//         </li>
//         <li>
//           <a href="/pets/dogs">See All Dogs ({dogs.length})</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default PetsListNav;

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./PetsListNav.css";

const PetsListNav = ({ cats, dogs }) => {
  return (
    <nav className="pets-nav">
      <ul>
        <li>
          <Link to="/pets/cats">See All Cats ({cats.length})</Link>{" "}
          {/* Replace <a> with <Link> */}
        </li>
        <li>
          <Link to="/pets/dogs">See All Dogs ({dogs.length})</Link>{" "}
          {/* Replace <a> with <Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default PetsListNav;
