"use strict";
const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
input.addEventListener("input", bar);
function bar() {
  spanText.style.fontSize = input.value + "px";
}
