import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import NewPetForm from "./NewPetForm";
import "./PetsList.css";
// import { petData } from "../../data/pets"; // updated path

const PetsList = ({ pets }) => {
  const [cats, setCats] = useState(pets.filter((pet) => pet.kind === "Cat"));
  const [dogs, setDogs] = useState(pets.filter((pet) => pet.kind === "Dog"));

  const addPet = (newPet) => {
    if (newPet.kind === "Cat") {
      setCats([...cats, { id: cats.length + 1, ...newPet }]);
    } else if (newPet.kind === "Dog") {
      setDogs([...dogs, { id: dogs.length + 1, ...newPet }]);
    }
  };

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <Routes>
        {/* <Route
          path="/"
          element={
            <div>
              {cats.map((cat) => (
                <Pet key={cat.id} kind="cat" pet={cat} />
              ))}
              {dogs.map((dog) => (
                <Pet key={dog.id} kind="dog" pet={dog} />
              ))}
            </div>
          }
        /> */}
        <Route
          path="cats"
          element={
            <div>
              {cats.map((cat) => (
                <Pet key={cat.id} kind="cat" pet={cat} />
              ))}
            </div>
          }
        />
        <Route
          path="dogs"
          element={
            <div>
              {dogs.map((dog) => (
                <Pet key={dog.id} kind="dog" pet={dog} />
              ))}
            </div>
          }
        />
      </Routes>
      <NewPetForm onSubmit={addPet} />
    </section>
  );
};

export default PetsList;
