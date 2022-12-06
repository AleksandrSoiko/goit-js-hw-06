const inputTextRef = document.querySelector("#validation-input");
const validationLength = inputTextRef.dataset.length;

const checkIsClassInput = (newClass) => {
  let classInput = inputTextRef.classList;
  if (classInput.length > 0) {
    inputTextRef.classList.replace(classInput, newClass);
  } else {
    inputTextRef.classList.add(newClass);
  }
};

inputTextRef.addEventListener("blur", () => {
  if (
    Number.parseInt(inputTextRef.value.length) ===
    Number.parseInt(validationLength)
  ) {
    checkIsClassInput("valid");
  } else {
    checkIsClassInput("invalid");
  }
});
