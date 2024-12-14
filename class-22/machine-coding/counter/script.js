const counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset-button");
const stepper = document.getElementById("changeBy");

incrementBtn.addEventListener("click", () => {
  const currentValue = Number(counterValue.textContent);
  let newValue = currentValue + Number(stepper.value);
  counterValue.textContent = newValue;
});

decrementBtn.addEventListener("click", () => {
  const currentValue = Number(counterValue.textContent);
  let newValue = currentValue - Number(stepper.value);

  if (newValue < 0) {
    counterValue.textContent = 0;
  } else {
    counterValue.textContent = newValue;
  }
});

resetBtn.addEventListener("click", () => {
  counterValue.textContent = 0;
  stepper.value = 1;
});
