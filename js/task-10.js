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
  for (let i = 0; i < inputRef.value; i += 1) {
    const color = getRandomHexColor();
    sizeBoxes += 10;
    const element = document.createElement("div");
    element.style.width = `${sizeBoxes}px`;
    element.style.height = `${sizeBoxes}px`;
    element.style.backgroundColor = color;
    element.classList.add("color-boxes");
    elementsArray.push(element);
  }
  containerRef.append(...elementsArray);
};

const destroyBoxes = () => {
  containerRef.innerHTML = "";
};

buttonCreateRef.addEventListener("click", () => {
  destroyBoxes();
  createBoxes(inputRef.value);
});

buttonDestroyRef.addEventListener("click", destroyBoxes);
