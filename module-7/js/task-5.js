"use strict";
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", event => {
  output.textContent = input.value;
  if (output.textContent === "") {
    output.textContent = "незнакомец";
  }
});
