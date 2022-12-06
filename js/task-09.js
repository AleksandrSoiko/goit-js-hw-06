function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector(".change-color");
const textColorRef = document.querySelector(".color");
const bodyDocumentRef = document.querySelector("body");

buttonRef.addEventListener("click", () => {
  const currentColor = getRandomHexColor();
  bodyDocumentRef.style.backgroundColor = currentColor;
  textColorRef.textContent = currentColor;
});
