import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Nav.css";

function Nav() {

  const navigate = useNavigate();


  return (
    <header>
      <article>
        <h1>
          <a onClick={() => navigate("/")}>
            Northwest <span>Animal Hospital</span>
          </a>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <a onClick={() => navigate("/staff")}>All Staff</a>
          </li>
          <li>
            <a onClick={() => navigate("/pets/All")}>All Pets</a>
          </li>
          <li>
          <a onClick={() => navigate("/pets/newpet")}>New Pet</a>
          </li>
        </ul>
        
      </aside>
    </header>
  );
}

export default Nav;
