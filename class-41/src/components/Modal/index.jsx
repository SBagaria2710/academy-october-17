import React from "react";
import "./styles.css";

function Modal({ isVisible, hide }) {
  if (!isVisible) return null;

  return (
    <div className="modalOverlay">
      <div className="modal">
        <h2>Modal Title</h2>
        <h2>This is a modal.</h2>
        <button onClick={hide}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
