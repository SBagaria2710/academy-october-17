import GrandDaughter from "./granddaughter";
import GrandSon from "./grandson";

function Children({ familyInfo }) {
  return (
    <div className="children">
      <h2>Children</h2>
      <GrandSon familyInfo={familyInfo} />
      <GrandDaughter familyInfo={familyInfo} />
    </div>
  );
}

export default Children;
