const value1 = new Promise((resolve, reject) => {
  reject("Scaler Academy");
});

const value2 = "Scaler Academy";

async function fetchValue() {
  return value1;
}

const value = fetchValue();
value.catch((data) => console.log(data));
