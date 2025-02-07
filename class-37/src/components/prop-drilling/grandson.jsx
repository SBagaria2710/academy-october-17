function GrandSon({ familyInfo }) {
  const { onlyForGrandChildren, familyName } = familyInfo;
  onlyForGrandChildren();
  return <div className="gson">Grandson {familyName}</div>;
}

export default GrandSon;
