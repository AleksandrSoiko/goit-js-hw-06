let counterValue = 0;
const buttonDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);
const counterValueRef = document.querySelector("#value");
counterValueRef.textContent = counterValue;

const updateValue = (event) => {
  counterValueRef.textContent = counterValue;
};
const incrementClick = (event) => {
  counterValue += 1;
  updateValue();
};
const decrementClick = (event) => {
  counterValue -= 1;
  updateValue();
};
buttonDecrementRef.addEventListener("click", decrementClick);
buttonIncrementRef.addEventListener("click", incrementClick);
