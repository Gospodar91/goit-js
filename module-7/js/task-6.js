"use strict";
const input = document.querySelector("#validation-input");
const controlLeng = input.getAttribute("data-length");
input.addEventListener("blur", isValid);
function isValid() {
  if (input.value.length === Number(controlLeng)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
  }
}
