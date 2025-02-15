import React, { useState, useMemo } from "react";

const generateLargeArray = () => {
  const largeArray = [];
  for (let i = 0; i < 100000; i++) {
    largeArray.push(i);
  }
  return largeArray;
};

const sumArray = (arr) => {
  console.log("Calculating sum...");
  return arr.reduce((acc, current) => acc + current, 0);
};

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const largeArray = generateLargeArray();
  const sum = useMemo(() => sumArray(largeArray), [largeArray.length]);
  return (
    <div>
      <h1>Sum: {sum}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default MemoExample;
