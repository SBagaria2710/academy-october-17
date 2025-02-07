function GrandDaughter({ familyInfo }) {
  const { onlyForGrandChildren, familyName } = familyInfo;
  onlyForGrandChildren();
  return <div className="gdaughter">GrandDaughter {familyName}</div>;
}

export default GrandDaughter;
