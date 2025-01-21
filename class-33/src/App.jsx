import "./App.css";
import Button from "./components/Button";
import ConditionalRendering from "./components/ConditionalRendering";
import Greet from "./components/Greet";
import UserProfile from "./components/UserProfile";

function App() {
  const obj = { name: "Shahwat", age: "20" };
  const handleOnClick = () => {
    console.log("click");
  };
  return (
    <div>
      <Greet name={"Scaler"} />
      <UserProfile names={["Name 1", "name 2", "Name 3"]} obj={obj} />
      <ConditionalRendering isLoggedIn={true} />
      <Button onClick={handleOnClick} btnCta={"Click Me!"} />
    </div>
  );
}

export default App;
