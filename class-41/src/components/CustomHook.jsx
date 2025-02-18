import React from "react";
import useVisibility from "../hooks/useVisibility";
import Modal from "./Modal";

const CustomHook = () => {
  const { isVisible, show, hide, toggle } = useVisibility(false);
  return (
    <div>
      <button onClick={show}>Show Modal</button>
      <button onClick={toggle}>Toggle Modal</button>
      <Modal isVisible={isVisible} hide={hide} />
    </div>
  );
};

export default CustomHook;
