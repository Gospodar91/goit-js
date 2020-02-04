"use strict";

const productList = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
ingredients.forEach(ingr => {
  const prodLi = document.createElement("li");
  prodLi.textContent = ingr;
  fragment.appendChild(prodLi);
});
productList.appendChild(fragment);
