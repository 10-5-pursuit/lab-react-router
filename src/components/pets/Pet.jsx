import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faDog } from "@fortawesome/free-solid-svg-icons"; // Importing the cat and dog icons
import "./Pet.css";

const iconMap = {
  cat: <FontAwesomeIcon icon={faCat} />, // Using the imported cat icon
  dog: <FontAwesomeIcon icon={faDog} />, // Using the imported dog icon
};

const Pet = ({ kind, pet }) => {
  const icon = iconMap[kind.toLowerCase()]; // Ensure the kind prop is in lower case
  return (
    <article key={pet.id}>
      <h3>
        {icon} {pet.name}
      </h3>
    </article>
  );
};

export default Pet;
