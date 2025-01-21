import React from "react";

function Greet(props) {
  const { name } = props;
  return <h1>Hello, I am a {name}</h1>;
}

export default Greet;
