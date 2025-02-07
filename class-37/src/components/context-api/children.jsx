import GrandDaughter from "./granddaughter";
import GrandSon from "./grandson";

function Children() {
  return (
    <div className="children">
      <h2>Children</h2>
      <GrandSon />
      <GrandDaughter />
    </div>
  );
}

export default Children;
