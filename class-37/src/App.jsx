import "./App.css";
import Family from "./components/context-api/family";
import { useContext } from "react";
import { FamilyContext } from "./components/context-api/FamilyContext";

function App() {
  const contextInfo = useContext(FamilyContext);
  console.log("From App.jsx", contextInfo);
  return <Family />;
}

export default App;
