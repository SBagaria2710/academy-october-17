import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TemperatureInput from "./components/TemperatureInput";
import TemperatureDisplay from "./components/TemperatureDisplay";
import TestUseEffect from "./components/TestUseEffect";

function App() {
  const [temp, setTemp] = useState("");
  const handleTemp = (newTemp) => {
    setTemp(newTemp);
  };
  return (
    <div>
      <TestUseEffect />
      {/* <TemperatureInput temp={temp} handleTemp={handleTemp} />
      <TemperatureDisplay temp={temp} /> */}
    </div>
  );
}

export default App;
