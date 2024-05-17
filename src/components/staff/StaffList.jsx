// import React from "react";
// import Staffer from "./Staffer";
// import "./StaffList.css";

// export const StaffList = ({ employees }) => {
//   const staff = employees.map((employee) => (
//     <Staffer key={employee.id} employee={employee} />
//   ));

//   return (
//     <section className="staff-list">
//       <h2>Our Staff</h2>
//       <div className="staffers">{staff}</div>
//     </section>
//   );
// };

// export default StaffList;

// StaffList.jsx
import React, { useState } from "react";
import Staffer from "./Staffer";
import NewStaffForm from "./NewStaffForm";
import "./StaffList.css";

const StaffList = ({ employees }) => {
  const [staff, setStaff] = useState(employees);

  const addStaffMember = (newStaffMember) => {
    setStaff([...staff, { id: staff.length + 1, ...newStaffMember }]);
  };

  return (
    <section className="staff-list">
      <h2>Our Staff</h2>
      <NewStaffForm onSubmit={addStaffMember} />
      <div className="staffers">
        {staff.map((staffMember) => (
          <Staffer key={staffMember.id} employee={staffMember} />
        ))}
      </div>
    </section>
  );
};

export default StaffList;
