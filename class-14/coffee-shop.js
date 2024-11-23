function placeOrder(drink) {
  return new Promise((resolve, reject) => {
    if (drink === "coffee") {
      resolve("Order for coffee placed");
    } else {
      reject(`Order for ${drink} cannot be placed`);
    }
  });
}

function processOrder(orderPlaced) {
  return new Promise((resolve) => {
    resolve(`${orderPlaced} and Served.`);
  });
}

function generateBill(processedOrder) {
  return new Promise(function (resolve) {
    resolve(`${processedOrder} and Bill Generated for Rs 200`);
  });
}

// placeOrder("coffee")
//   .then(function (orderStatus) {
//     console.log(orderStatus);
//     return orderStatus;
//   })
//   .then(function (orderStatus) {
//     let orderIsProcessed = processOrder(orderStatus);
//     return orderIsProcessed;
//   })
//   .then(function (orderIsProcessed) {
//     console.log(orderIsProcessed);
//     let finalLog = generateBill(orderIsProcessed);
//     return finalLog;
//   })
//   .then(function (finalLog) {
//     console.log(finalLog);
//   }).catch((message) => console.log(message));

async function serveOrder() {
  try {
    let orderStatus = await placeOrder("coffee");
    console.log(orderStatus);
    let orderIsProcessed = await processOrder(orderStatus);
    console.log(orderIsProcessed);
    let finalLog = await generateBill(orderIsProcessed);
    console.log(finalLog);
  } catch (message) {
    console.log(message);
  }
}

serveOrder();
