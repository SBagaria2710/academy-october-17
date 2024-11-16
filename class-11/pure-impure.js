// Pure Function
function sum(a, b) {
  const result = a + b;
  return result;
}

sum(1, 3); // 4
sum(1, 3); // 4
sum(1, 3); // 4

// Impure Function
var c = 0;
function impureSum(a, b) {
  const result = a + b + c++;
  return result;
}

impureSum(1, 3); // 4
impureSum(1, 3); // 5
impureSum(1, 3); // 6
