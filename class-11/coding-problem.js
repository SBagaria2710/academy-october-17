/**
 * 1. Area: pi r r
 * 2. Circumference: 2 pi r
 * 3. Diameter: 2 r
 *
 * Math.PI
 */
let radiusArr = [2, 4, 8, 10];

function calculateArea(radiusArr) {
  let results = [];
  for (let i = 0; i < radiusArr.length; i++) {
    results.push(Math.PI * radiusArr[i] * radiusArr[i]);
  }
  return results;
}
const areaArr = calculateArea(radiusArr);
console.log(areaArr);

function calculateCircumference(radiusArr) {
  let results = [];
  for (let i = 0; i < radiusArr.length; i++) {
    results.push(2 * Math.PI * radiusArr[i]);
  }
  return results;
}
const circumferenceArr = calculateCircumference(radiusArr);
console.log(circumferenceArr);

function calculateDiameter(radiusArr) {
  let results = [];
  for (let i = 0; i < radiusArr.length; i++) {
    results.push(2 * radiusArr[i]);
  }
  return results;
}
const diameterArr = calculateDiameter(radiusArr);
console.log(diameterArr);
