import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets }) => {
  
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">

        
        {/* All cats section */}
        {cats.map((cat) => (
          <Pet key={cat.id} kind={cat.kind.toLowerCase()} pet={cat} />
        ))}

        {/* All dogs section */}

        {dogs.map((dog) => (
          <Pet key={dog.id} kind={dog.kind.toLowerCase()} pet={dog} />
        ))}
      </section>
    </section>
  );
};

export default PetsList;
