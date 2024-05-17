// NewStaffForm.jsx
import React, { useState } from "react";

const NewStaffForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [prefix, setPrefix] = useState("");
  const [postfix, setPostfix] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ firstName, lastName, prefix, postfix, title });
    setFirstName("");
    setLastName("");
    setPrefix("");
    setPostfix("");
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        Prefix:
        <input
          type="text"
          value={prefix}
          onChange={(e) => setPrefix(e.target.value)}
        />
      </label>
      <label>
        Postfix:
        <input
          type="text"
          value={postfix}
          onChange={(e) => setPostfix(e.target.value)}
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <button type="submit">Add Staff Member</button>
    </form>
  );
};

export default NewStaffForm;
