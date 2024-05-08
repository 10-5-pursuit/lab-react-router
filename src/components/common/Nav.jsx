import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <article>
        <h1>
          <NavLink to={'/'}>
            Northwest <span>Animal Hospital</span>
          </NavLink>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <NavLink to={'/staff'}>All Staff</NavLink>
          </li>
          <li>
            <NavLink to={"/pets/cats"}>All Pets</NavLink>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
