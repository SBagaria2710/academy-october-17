function value1() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000, "Scaler Academy");
  });
}

async function fetchValue() {
  const response = await value1();
  console.log(response, "9");
  return response;
}

const value = fetchValue();
console.log(value, "13");

// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log("calling");
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // Expected output: "resolved"
// }

// console.log(asyncCall());
