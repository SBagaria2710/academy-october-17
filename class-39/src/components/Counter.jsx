import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const inCount = () => {
    setCount((count) => count + 1);
  };

  const deCount = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <button onClick={inCount}>+</button>
      <h2>Count is {count}</h2>
      <button onClick={deCount}>-</button>
    </>
  );
}
