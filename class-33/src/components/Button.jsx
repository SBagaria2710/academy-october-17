import React from "react";

function Button({ btnCta, onClick }) {
  return <button onClick={onClick}>{btnCta}</button>;
}

export default Button;
