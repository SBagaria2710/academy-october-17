import React from "react";

function UserProfile({ names, obj }) {
  // Destructuring Props
  const { name, age } = obj; // Destructuring obj

  console.log(names); // ??
  return (
    <div>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
      <h1>
        Name: {name} and Age: {age}
      </h1>
    </div>
  );
}

export default UserProfile;
