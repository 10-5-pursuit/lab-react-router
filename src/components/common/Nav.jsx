// import React from "react";
// import "./Nav.css";

// function Nav() {
//   return (
//     <header>
//       <article>
//         <h1>
//           <a href="/">
//             Northwest <span>Animal Hospital</span>
//           </a>
//         </h1>
//       </article>
//       <aside>
//         <ul>
//           <li>
//             <a href="/staff">All Staff</a>
//           </li>
//           <li>
//             <a href="/pets">All Pets</a>
//           </li>
//         </ul>
//       </aside>
//     </header>
//   );
// }

// export default Nav;

import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <article>
        <h1>
          <Link to="/" className="logo">
            Northwest <span>Animal Hospital</span>
          </Link>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <Link to="/staff">All Staff</Link>
          </li>
          <li>
            <Link to="/pets">All Pets</Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
