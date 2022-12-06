const inputSizeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
inputSizeRef.value = 16;

inputSizeRef.addEventListener("input", () => {
  textRef.style.fontSize = `${inputSizeRef.value}px`;
});
