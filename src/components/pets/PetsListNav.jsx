
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./PetsListNav.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const PetsListNav = ({ cats, dogs, setAnimals }) => {
  const navigate = useNavigate();

  const handleClick = (pet) => {
    navigate(`/pets/${pet}`)
    setAnimals(pet)
  }


  return (
    <nav className="pets-nav">
      <ul>       
        <li>  
          <a onClick={() => handleClick("All")}>See All ({cats.length + dogs.length})</a>
        </li>
        <li>  
          <a onClick={() => handleClick("cats")}>See All Cats ({cats.length})</a>
        </li>
        <li>
          <a onClick={() => handleClick("dogs")}>See All Dogs ({dogs.length})</a>
        </li>
      </ul>
    </nav>
  );
};

export default PetsListNav;
