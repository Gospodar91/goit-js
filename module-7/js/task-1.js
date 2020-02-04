"use strict";
const liCategory = document.querySelectorAll(".item");
console.log(`В списке ${liCategory.length} категории`);
const struct = document.querySelectorAll(".item");
struct.forEach(tag => {
  console.log(`Категоря :${tag.querySelector("h2").textContent}`);
  console.log(`Количество элементов :${tag.querySelectorAll("ul li").length}`);
});
