import React from "react";
import PetsListNav from "./PetsListNav";
import "./PetsList.css";
import HandleDisplay from "../Utils/Display"

export const PetsList = ({ pets, animals, setAnimals }) => {

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
      <PetsListNav cats={cats} dogs={dogs} setAnimals={setAnimals}/>
      <section className="pets-list">
        <HandleDisplay animals={animals} cats={cats} dogs={dogs} pets={pets}/>
      </section>
    </section>
  );
};

export default PetsList;
