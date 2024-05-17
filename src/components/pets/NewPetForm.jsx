// // NewPetForm.jsx
// import React, { useState } from "react";

// const NewPetForm = ({ onSubmit }) => {
//   const [name, setName] = useState("");
//   const [type, setType] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ name, type });
//     setName("");
//     setType("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <label>
//         Type:
//         <select value={type} onChange={(e) => setType(e.target.value)}>
//           <option value="cat">Cat</option>
//           <option value="dog">Dog</option>
//         </select>
//       </label>
//       <button type="submit">Add Pet</button>
//     </form>
//   );
// };

// export default NewPetForm;
// NewPetForm.jsx

// NewPetForm.jsx
import React, { useState } from "react";

const NewPetForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, type });
    setName("");
    setType("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="off" // Setting autocomplete attribute to off
        />
      </label>
      <label htmlFor="type">
        Type:
        <select
          id="type"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          autoComplete="off" // Setting autocomplete attribute to off
        >
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
        </select>
      </label>
      <button type="submit">Add Pet</button>
    </form>
  );
};

export default NewPetForm;
