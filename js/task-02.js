const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listElementsRef = [];
for (const element of ingredients) {
  let itemElementRef = document.createElement("li");
  itemElementRef.textContent = element;
  itemElementRef.classList.add("item");
  listElementsRef.push(itemElementRef)
}

const ingredientsListRef = document.querySelector("#ingredients")
ingredientsListRef.append(...listElementsRef)