import React, { useState } from "react";

export const SimpleForm = () => {
  const [firstName, setFirstName] = useState("");

  const handleChange = (event) => {
    setFirstName(event.target.value);
  };

  return (
    <form>
      <input type='text' placeholder='First Name' onChange={handleChange} />
    </form>
  );
};
