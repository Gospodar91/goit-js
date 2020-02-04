"use strict";
const tempIncr = document.querySelector('button[data-action="increment"]');
const tempDecr = document.querySelector('button[data-action="decrement"]');
const valueField = document.querySelector("#value");
let counterValue = 0;
function incr() {
  counterValue += 1;
  valueField.textContent = counterValue;
  return counterValue;
}

function decr() {
  counterValue -= 1;
  valueField.textContent = counterValue;
  return counterValue;
}
tempIncr.addEventListener("click", event => incr());

tempDecr.addEventListener("click", event => decr());
