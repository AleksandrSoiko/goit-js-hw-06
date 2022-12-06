function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector("input");
const buttonCreateRef = document.querySelector("button[data-create]");
const buttonDestroyRef = document.querySelector("button[data-destroy]");
const containerRef = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const elementsArray = [];
  let sizeBoxes = 20;
  if (inputRef.value <= 0) {
    alert("Please enter the number greater than 0");
    inputRef.value = 1;
  } else {
    for (let i = 0; i < inputRef.value; i += 1) {
      const color = getRandomHexColor();
      sizeBoxes += 10;
      const element = document.createElement("div");
      element.style.marginBottom = "5px";
      element.style.border = "1px solid tomato";
      element.style.width = `${sizeBoxes}px`;
      element.style.height = `${sizeBoxes}px`;
      element.style.backgroundColor = color;
      element.classList.add("color-boxes");
      elementsArray.push(element);
    }
    containerRef.append(...elementsArray);
  }
};

const destroyBoxes = () => {
  containerRef.innerHTML = "";
};

buttonCreateRef.addEventListener("click", () => {
  destroyBoxes();
  createBoxes(inputRef.value);
});

buttonDestroyRef.addEventListener("click", destroyBoxes);
