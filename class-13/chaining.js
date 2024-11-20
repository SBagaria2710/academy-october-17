// Maintaining Promises in Sequence
function cleanRoom() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const hasCleanedRoom = Math.random() > 0.5;
      if (hasCleanedRoom) resolve("Cleaned the room");
      else reject("Failed to cleaned the room");
    }, 1000);
  });
}

function removeGarbage(message) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const hasTakenOutGarbage = Math.random() > 0.5;
      if (hasTakenOutGarbage) resolve(message + " and removed the garbage");
      else reject(message + " but failed to remove the garbage");
    }, 1000);
  });
}

function winIceCream(message) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(message + " and won ice cream");
    }, 1000);
  });
}

cleanRoom()
  .then(function (result) {
    return removeGarbage(result);
  })
  .then(function (result) {
    return winIceCream(result);
  })
  .then(function (result) {
    console.log("Finished: " + result); // Logs the final message after all promises are resolved.
  })
  .catch(function (error) {
    console.error("Error: " + error + " - No ice cream for you!"); // Logs the error message if any promise is rejected.
  });

// ------------------------------
