let radiusArr = [2, 4, 6, 8];

function calculateArea(radius) {
  return Math.PI * radius * radius;
}

function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

function calculateDiameter(radius) {
  return 2 * radius;
}

function calculate(radiusArr, fn) {
  let results = [];
  for (let i = 0; i < radiusArr.length; i++) {
    results.push(fn(radiusArr[i]));
  }
  return results;
}

const areaArr = calculate(radiusArr, calculateArea);
const circumferenceArr = calculate(radiusArr, calculateCircumference);
const diameterArr = calculate(radiusArr, calculateDiameter);

console.log(areaArr, circumferenceArr, diameterArr);
