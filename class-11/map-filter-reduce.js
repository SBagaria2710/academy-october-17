// Golden Rule: Never manipulate or change the original array.
const arr = [1, 2, 3, 4, 5];

// Map
// const squareArr = arr.map((num) => num * num);
// console.log(squareArr);

// const transactions = [100, 1000, 500, -800, 200];
// const inrToUsd = 85;

// const inUSD = transactions.map((rupee) => rupee / inrToUsd);
// console.log(inUSD);

// Filter
// const evenNum = arr.filter(function (asdfasdfasdf) {
//   if (asdfasdfasdf % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// const oddNum = arr.filter(function (num) {
//   if (num % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log({ evenNum, oddNum });

// const transactions = [100, 1000, 500, -800, 200];
// const positiveValues = transactions.filter((amount) => amount > 0);
// console.log(positiveValues);

// Reduce
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);

// let totalSum = arr.reduce(function (accumulator, num) {
//   accumulator = accumulator + num;
//   return accumulator;
// }, 0);
let totalSum = arr.reduce((acc, num) => acc + num, 0);
console.log(totalSum);
