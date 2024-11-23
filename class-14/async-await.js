const p = new Promise((resolve, reject) => {
  setTimeout(function () {
    reject("Data Recevied");
  }, 2500);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Data Recevied 2");
  }, 500);
});

async function handlePromise() {
  console.log("Scaler");

  let response;
  try {
    response = await p;
  } catch (err) {
    response = "Fallback Value";
  }
  console.log(response);
  console.log("Create Impact 1");

  const response2 = await p2;
  console.log(response2);
  console.log("Create Impact 2");
}

handlePromise();
console.log("After");
