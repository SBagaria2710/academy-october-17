import Parent from "./parent";
import { FamilyContext } from "./FamilyContext";

function Family() {
  const state = {
    familyName: "Scaler",
    onlyForParents: () => {
      console.log("Info for the Parents");
    },
    onlyForGrandChildren: () => {
      console.log("Info for grandChildren");
    },
  };
  return (
    <FamilyContext.Provider value={state}>
      <div className="family">
        <Parent />
      </div>
    </FamilyContext.Provider>
  );
}

export default Family;
