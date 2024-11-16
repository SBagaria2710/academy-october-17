// Functions are called first class citizens in JS
// 1. Functions can be assigned to variables
// 2. Functions can be passed as arguments to other functions
// 3. Functions can be returned from other functions

function printFullName(asdfasdf) {
  console.log("Scaler");
  asdfasdf();
}

function printLastName() {
  console.log("Academy");
}

printFullName(printLastName);

// -------

function printDetails(scaler, academy) {
  // HOF
  scaler(academy);
}

function printName(cb) {
  // HOF
  console.log("Scaler Academy");
  cb();
}

function printInstructorName() {
  // Not HOF
  console.log("Shashwat");
}

printDetails(printName, printInstructorName);
