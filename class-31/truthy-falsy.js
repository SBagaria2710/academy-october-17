const falsyValues = [false, 0, -0, "", null, undefined];
falsyValues.forEach((value) => {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
});

// -----------------
const truthyValues = [true, 1, -1, 10, "hello", {}, [], () => {}];
truthyValues.forEach((value) => {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
});
