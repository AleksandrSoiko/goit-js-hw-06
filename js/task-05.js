const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");
const defaultOutputTextRef = nameOutputRef.textContent;
const defaultUpdaterName = () => {
  if (nameOutputRef.textContent === "") {
    nameOutputRef.textContent = defaultOutputTextRef;
  }
};

nameInputRef.addEventListener("input", (event) => {
  nameOutputRef.textContent = event.currentTarget.value;
  defaultUpdaterName();
});
