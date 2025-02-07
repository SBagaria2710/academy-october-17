import { useContext } from "react";
import { FamilyContext } from "./FamilyContext";

function GrandDaughter() {
  const contextInfo = useContext(FamilyContext);
  contextInfo.onlyForGrandChildren();
  return (
    <div className="gdaughter">GrandDaughter {contextInfo.familyName}</div>
  );
}

export default GrandDaughter;
