import React, { useState, useCallback } from "react";

const UseCallbackExample = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const removeItem = useCallback((itemToRemove) => {
    setItems((items) => items.filter((item) => item !== itemToRemove));
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>
          {item}
          <button onClick={() => removeItem(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default UseCallbackExample;
